import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { Box, TextField } from "@mui/material";
import PriceDetails from './PriceDetails';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';
import { useParams } from 'react-router-dom';

const moneda = "COP"
const maxDiasAlquiler = 180

export default function RentDetail() {
    const params = useParams();
    const idCel = params.productId;
    const phone = localStorage.getItem("cel" + idCel);
    const phoneJson = JSON.parse(phone);
    const phoneName = phoneJson.name;
    const intl = useIntl();
    const phonePrice = phoneJson.price_per_day + " " + moneda + "/" + intl.formatMessage({ id: "Day" });
    const phoneImg = phoneJson.image;


    

    const [dias, setDias] = useState('5');

    return (
        <Grid container spacing={0}>
            <Breadcrumb breadcrumbs={[
                { href: `/products/${idCel}`, text: intl.formatMessage({ id: "Rent" }) },
                { href: '', text: intl.formatMessage({ id: "RentDetail_Title" }) }
            ]} />
            <Grid container direction={'row'} spacing={2} marginBottom={8}>
                <Grid item xs={12} md={6}>
                    <PhoneResume dias={dias} setDias={setDias} phoneName={phoneName} phonePrice={phonePrice} phoneImg={phoneImg} label={intl.formatMessage({ id: "RentDetail_RentDays" })} error1={intl.formatMessage({id: "NumberGreaterThanZero"})} error2={intl.formatMessage({id: "NoMoreThan180"})}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <PriceDetails dias={dias} price_per_day={phoneJson.price_per_day} />
                    <RentButton text= {intl.formatMessage({ id: "RentDetail_PriceInfo_Continue" })} idCel={idCel} onChange={localStorage.setItem("dias", dias)} />
                </Grid>
            </Grid>
        </Grid>
    );
}


const cardStyle = {
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


const RentButton = ({ text, idCel }) =>
    <>
        <Link to={`/products/${idCel}/billing`}>
            <Button
                style={{
                    borderRadius: 20,
                    padding: "5px 20px",
                    backgroundColor: COLORS.primary,
                    fontSize: "25px",
                    textTransform: "none",
                    width: "100%",
                }}
                variant="contained"
            >{text}</Button>
        </Link>
    </>



const PhoneResume = ({ dias, setDias, phoneName, phonePrice, phoneImg, label, error1, error2}) => {
    const getProblemInNumber = () => {

        const number = dias ? Number(dias) : 5

        if (number < 1) return error1
        if (number > maxDiasAlquiler) return error2

    }


    return (<Card sx={cardStyle} >
        <Box display={"flex"} justifyContent="center">
            <Box display={"flex"} justifyItems="center" padding="1rem">
                <img src={phoneImg} alt={phoneName} style={{ maxWidth: '130%' }} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap="15px" justifyContent="center" padding="2rem">
                <Typography variant='h4' textAlign={'left'}> {phoneName} </Typography>
                <Typography variant='h5' textAlign={'left'}> {phonePrice} </Typography>
                <TextField
                    color={!getProblemInNumber() ? "success" : "error"}
                    required
                    id="outlined-required"
                    type="number"
                    defaultValue="5"
                    label={label}
                    onChange={(e) => setDias(e.target.value)} // Update state on change     
                />
                {<Typography variant='body1' color={"red"}>{getProblemInNumber()}</Typography>}
            </Box>
        </Box>

    </Card>)
}
