/* eslint-disable */
import React from 'react';
import { useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import { COLORS } from "../styles/colors";
import appleImg from '../assets/brands/apple.png';
import huaweiImg from '../assets/brands/huawei.png';
import xiaomiImg from '../assets/brands/xiaomi.png';
import samsungImg from '../assets/brands/samsung.png';
import mainImage from '../assets/mainImage.png';
import RentButton from './RentButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Nav } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';


const brands = [
    {
        name: "Samsung",
        image: samsungImg
    },
    {
        name: "Xiaomi",
        image: xiaomiImg
    },
    {
        name: "Huawei",
        image: huaweiImg
    },
    {
        name: "iPhone",
        image: appleImg
    },
]


export default function MainPage() {

    useEffect(() => {

        async function fetchData() {
            const data = await getDatos();
            console.log(data);

            localStorage.setItem("phoneList", JSON.stringify(data));
            setPhoneListJson(data);

            data.forEach((cellphone) => {
                localStorage.setItem(`cel${cellphone.id}`, JSON.stringify(cellphone));
            });
        }
        if (localStorage.getItem('phoneList') && localStorage.getItem('phoneList').length > 0) {
            setPhoneListJson(JSON.parse(localStorage.getItem('phoneList')));
            fetchData();
        }
        else {
            fetchData();
        }

    }, []);

    async function getToken() {
        const response = await fetch("http://localhost:3000/api/v1/users-auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                "username": "admin",
                "password": "admin"
            }),
        });
        const data = await response.json();
        return data.token;
    }

    async function getDatos() {
        const token = await getToken();
        localStorage.setItem("token", token);
        const response = await fetch("http://localhost:3000/api/v1/phones", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        });
        const data = await response.json();
        return data;
    }

    const intl = useIntl();

    const MainPage_OurBrands_Title = intl.formatMessage({ id: 'MainPage_OurBrands_Title' });
    const MainPage_Popular_Title = intl.formatMessage({ id: 'MainPage_Popular_Title' });
    const MainPage_Popular_SeeAllButton = intl.formatMessage({ id: 'MainPage_Popular_SeeAllButton' });




    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [phoneListJson, setPhoneListJson] = useState([]);

    console.log(phoneListJson);


    phoneListJson.sort((a, b) => (a.rating > b.rating) ? -1 : 1);


    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&display=swap');
            </style>
            <Stack direction="column" spacing={-0.5} marginBottom={7}>
                <MainImageText osm={onlySmallScreen} />
                <Card sx={cardStyle}>
                    <BrandsTitleStyle text={MainPage_OurBrands_Title} />
                    <BrandsRow brands={brands} />
                </Card>
                <Card sx={cardStyle}>
                    <SectionTitle text={MainPage_Popular_Title} />
                    <PhonesRow phones={phoneListJson.slice(0, 4)} />
                    <SeeAllButtom text={MainPage_Popular_SeeAllButton} />
                </Card>
            </Stack>
        </>
    );
}


const cardStyle = {
    border: "none",
    boxShadow: "none",
    width: "80vw",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
}


const MainImageText = (osm) => {

    const intl = useIntl();
    const MainPage_RentNow_Title = intl.formatMessage({ id: 'MainPage_RentNow_Title' });
    const MainPage_RentNow_Description = intl.formatMessage({ id: 'MainPage_RentNow_Description' });
    const MainPage_RentNow_DiscoverButton = intl.formatMessage({ id: 'MainPage_RentNow_DiscoverButton' });

    const textColumnStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const callToActionStyle = {
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "58px",
        lineHeight: "58px",
        color: COLORS.primary,
        textAlign: "center",
    }

    const subtitleStyle = {
        fontFamily: "Space Grotesk",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "26px",
        color: "#030F26",
    }

    return (
        <Grid container spacing={2} width={"100%"}>
            <Grid item xs={12} sm={6} style={textColumnStyle}>
                <Stack direction="column" spacing={5}>
                    <Typography variant="h1" sx={callToActionStyle}>{MainPage_RentNow_Title}</Typography>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&family=Space+Grotesk&display=swap');
                    </style>
                    <Typography variant="h2" sx={subtitleStyle}>{MainPage_RentNow_Description}</Typography>
                    <Nav.Link style={{ textDecoration: 'none' }} href="/products">
                        <RentButton text={MainPage_RentNow_DiscoverButton} />
                    </Nav.Link>
                </Stack>
            </Grid>
            {osm.osm ? null : <Grid item xs={12} sm={6}>
                <img src={mainImage} alt="Main" style={{ maxWidth: '100%', objectFit: "cover", height: "100%", objectPosition: "left" }} />
            </Grid>}
        </Grid>
    );
}


const BrandsTitleStyle = ({ text }) =>
    <Typography sx={{

        fontFamily: "Nunito",
        fontStyle: "normal",
        fontSize: "38px",
        lineHeight: "58px",
        color: COLORS.primary,
        textAlign: "center",
        p: 2,

    }} > {text} </Typography>


const PhonesRow = ({ phones }) => {

    const intl = useIntl();

    return (
        <Grid container spacing={3} padding={2} >
            {phones.map((phone, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <PhoneCardSimple name={phone.name} image={phone.image} cost={phone.pricePerDay} buttonText={intl.formatMessage({ id: "Rent" })} days={8} route={"/products/" + phone.id} />
                </Grid>
            ))}
        </Grid>
    );
}


const BrandsRow = ({ brands }) => {
    const brandItemStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <Grid container spacing={2} padding={4}>
            {brands.map((brand, index) => (
                <Grid item xs={12} sm={6} md={3} key={index} style={brandItemStyle}>
                    <Nav.Link style={{ textDecoration: 'none' }} href={"/" + brand.name}>
                        <img src={brand.image} alt={brand.name} style={{ maxWidth: "200px" }} />
                    </Nav.Link>
                </Grid>
            ))}
        </Grid>
    );
}



const SectionTitle = ({ text }) =>
    <Typography sx={{
        fontFamily: "Nunito",
        fontStyle: "normal",
        fontSize: "38px",
        lineHeight: "58px",
        color: COLORS.dark,
        textAlign: "left",
        p: 2,
    }}>
        {text}
    </Typography>


const SeeAllButtom = ({ text }) =>
    <Nav.Link style={{ textDecoration: 'none' }} href="/products">
        <Button
            style={buttonStyle}
            variant="contained"
        >{text} <EastIcon sx={{ paddingLeft: "10px" }} />
        </Button>
    </Nav.Link>


const buttonStyle = {
    borderRadius: 13,
    padding: "7px 40px",
    backgroundColor: COLORS.dark,
    fontSize: "18px",
    textTransform: "none",
    fontFamily: "Open Sans",
}