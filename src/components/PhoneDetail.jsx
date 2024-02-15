/* eslint-disable */
import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import FormLabel from '@mui/material/FormLabel';
import { COLORS } from '../styles/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router';
import GoBack from './GoBack';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const moneda = "USD"


export default function PhoneDetail({ idCel1 }) {

    const intl = useIntl();

    const params = useParams();
    let idCel = params.productId;
    localStorage.setItem("currentCel", idCel);

    if (idCel === undefined) {
        idCel = idCel1;
    }
    const phone = localStorage.getItem("cel" + idCel);
    let phoneJson = JSON.parse(phone);
    if (phoneJson === null) {
        phoneJson = {
            id: 1,
            name: "Samsung Galaxy S21",
            brand: "Samsung",
            price_per_day: 10,
            availability: 10,
            image: "https://www.samsung.com/us/smartphones/galaxy-s21-5g/buy/galaxy-s21-5g-phantom-violet-128gb-unlocked-sm-g991uzvaxaa/",
            camera_specifications: "12MP Ultra Wide Camera, 12MP Wide-angle Camera, 64MP Telephoto Camera",
            memory_specs: "128GB, 256GB, 512GB",
            ram_specs: "8GB",
        }
    }

    const theme = useTheme();
    const oss = useMediaQuery(theme.breakpoints.down("sm"));
    const price = phoneJson.pricePerDay + " " + moneda + "/" + intl.formatMessage({ id: "Day" });

    async function getReviews(id) {
        const response = await fetch(`http://localhost:3000/api/v1/phones/${id}/reviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });
        const data = await response.json();
        return data;
    }
    
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const data = await getReviews(localStorage.getItem("currentCel"));
            setReviews(data);
        }
        fetchData();
    }, []);

    const link = localStorage.getItem("accUserName") ? `/products/${phoneJson.id}/rent` : `/Login`;
    
    return (
        <Stack marginBottom={7}>
            <GoBack text={intl.formatMessage({ id: "PhoneDetail_LablelDetail" })} route="/products" />
            <Card sx={cardStyle}>
                <Grid container spacing={0} padding={3} direction={'row'} alignItems={'center'}>
                    {!oss && <Grid item xs={12} sm={5}>
                        <img
                            style={{ maxWidth: '130%', height: '30vw' }}
                            alt={phoneJson.name}
                            src={phoneJson.image}
                        />
                        <Typography variant="h4" component="div" padding={1}>
                            {price}
                        </Typography>
                    </Grid>}

                    <Grid item xs={12} sm={7} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" color="text.primary" padding={1}>
                            {phoneJson.brand.name}
                        </Typography>
                        <Typography variant="h6" color="text.primary" padding={1}>
                            {phoneJson.availability} {intl.formatMessage({ id: "PhoneDetail_LablelStock" })}
                        </Typography>
                        <Typography variant="h3" component="div" padding={1}>
                            {phoneJson.name}
                        </Typography>
                        {oss && <Grid item xs={12} sm={5}>
                            <img
                                style={{ maxWidth: '130%', height: '60vw' }}
                                alt={phoneJson.name}
                                src={phoneJson.image}
                            />
                            <Typography variant="h6" color="text.primary" padding={1}>
                                {price}
                            </Typography>
                        </Grid>}
                        <Rating name="read-only" value={5} readOnly size="large" />
                        <SpecList specs={[phoneJson.cameraSpecs, phoneJson.memorySpecs, phoneJson.screenSpecs]} />
                        <Link to={link}>
                            <RentButton text={intl.formatMessage({ id: "Rent" })} />
                        </Link>
                    </Grid>
                </Grid>

                <CardContent>
                    <CommentArea reviews = {reviews}/>
                </CardContent>

            </Card>
        </Stack>
    );
}


const cardStyle = {
    width: "80vw",
    // centered
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    alignSelf: "center",
}


const SpecList = ({ specs }) => {
    return (
        <List>
            {specs.map((spec, index) => (
                <ListItem key={index} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="h6" color="text.secondary">
                        {spec}
                    </Typography>
                </ListItem>
            ))}
        </List>
    );
}

const RentButton = ({ text }) =>
    <Button
        style={{
            borderRadius: 20,
            padding: "5px 20px",
            backgroundColor: COLORS.primary,
            fontSize: "25px",
            textTransform: "none",
        }}
        variant="contained"
    >{text}</Button>;

const CommentArea = ({reviews}) => <Stack spacing={1.3}>
    <FormLabel
        sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: '2rem',
            lineHeight: '22px',
            color: '#202020',
            textAlign: 'left',
            padding: 2
        }}
    ><FormattedMessage id="PhoneDetail_Reviews" /></FormLabel>
    <UserReviews reviews = {reviews}/>
</Stack>

const UserReviews = ({reviews}) =>
    <Stack spacing={3}>
        {reviews.map((review, index) => (
            <Card key={index} sx={{ textAlign: 'left' }}>
                <CardContent>
                    <Typography variant="h6" color="text.primary" >
                        {review.titulo}
                    </Typography>

                    <hr style={{
                        color: 'darkgray',
                        height: .1,
                    }} />


                    <Typography variant="body2" color="text.primary">
                        {review.text}
                    </Typography>

                    <Rating name="read-only" value={review.rating} readOnly size="large" />
                </CardContent>
            </Card>
        )).reverse()}
    </Stack>
