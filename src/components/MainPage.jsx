import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
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
    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const phoneList = localStorage.getItem('phoneList');
    const phoneListJson = JSON.parse(phoneList);

    phoneListJson.sort((a, b) => (a.rating > b.rating) ? -1 : 1);

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&display=swap');
            </style>
            <Stack direction="column" spacing={-0.5} marginBottom={7}>
                <MainImageText osm={onlySmallScreen} />
                <Card sx={cardStyle}>
                    <BrandsTitleStyle text="Nuestras marcas" />
                    <BrandsRow brands={brands} />
                </Card>
                <Card sx={cardStyle}>
                    <SectionTitle text="Populares" />
                    <PhonesRow phones={phoneListJson.slice(0, 4)} />
                    <SeeAllButtom text="Ver todos" />
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
                    <Typography variant="h1" sx={callToActionStyle}>Alquila tu celular ya</Typography>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&family=Space+Grotesk&display=swap');
                    </style>
                    <Typography variant="h2" sx={subtitleStyle}>Encuentra un celular a tu medida y a un precio accesible</Typography>
                    <Nav.Link style={{ textDecoration: 'none' }} href="/products">
                        <RentButton text="Descubrir" />
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
    return (
        <Grid container spacing={3} padding={2} >
            {phones.map((phone, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <PhoneCardSimple name={phone.name} image={phone.image} cost={phone.price_per_day} buttonText="Alquilar" days={8} route={"/products/" + phone.id} />
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