import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';
import examplePhone1 from '../assets/phones/iPhone14Pro.png';
import examplePhone2 from '../assets/phones/HuaweiNovaY71.png';
import examplePhone3 from '../assets/phones/SamsungGalaxyS22.png';
import examplePhone4 from '../assets/phones/OPPOReno7.png';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import { COLORS } from "../styles/colors";
import appleImg from '../assets/brands/apple.png';
import huaweiImg from '../assets/brands/huawei.png';
import nvidiaImg from '../assets/brands/nvidia.png';
import samsungImg from '../assets/brands/samsung.png';
import mainImage from '../assets/mainImage.png';
import RentButton from './RentButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const exampleBrands = [
    {
        name: "Samsung",
        image: samsungImg

    },
    {
        name: "Nvidia",
        image: nvidiaImg
    },
    {
        name: "Huawei",
        image: huaweiImg
    },
    {
        name: "Apple",
        image: appleImg
    },
]


const exampleActiveRents = [
    {
        name: "iPhone 12 Pro",
        image: examplePhone1,
        cost: "$ 10 000 COP / día",
        buttonText: "Alquilar",
    },
    {
        name: "Huawei Nova Y71",
        image: examplePhone2,
        cost: "$ 7 000 COP / día",
        buttonText: "Alquilar",
    },
    {
        name: "Samsung Galaxy S22",
        image: examplePhone3,
        cost: "$ 15 000 COP / día",
        buttonText: "Alquilar",
    },
    {
        name: "iPhone 13",
        image: examplePhone4,
        cost: "$ 10 000 COP / día",
        buttonText: "Alquilar",
    },
]

export default function MainPage() {
    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&display=swap');
            </style>
            <Stack direction="column" spacing={-0.5} marginBottom={7}>
                <MainImageText osm={onlySmallScreen}/>
                <Card sx={cardStyle}>
                    <BrandsTitleStyle text="Nuestras marcas" />
                    <BrandsRow brands={exampleBrands} />
                </Card>
                <Card sx={cardStyle}>
                    <SectionTitle text="Populares" />
                    <PhonesRow phones={exampleActiveRents} />
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
                    <RentButton text="Descubrir" />
                </Stack>
            </Grid>
            {osm.osm ? null : <Grid item xs={12} sm={6}>
                <img src={mainImage} alt="Main" style={{ maxWidth: '100%', objectFit: "cover", height: "100%", objectPosition: "left"}} />
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
            {phones.map((phone) => (
                <Grid item xs={12} sm={6} md={3}>
                    <PhoneCardSimple {...phone} />
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
                    <img src={brand.image} alt={brand.name} style={{maxWidth:"200px"}}/>
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
    <Button
        style={buttonStyle}
        variant="contained"
    >{text} <EastIcon sx={{ paddingLeft: "10px" }} />
    </Button>


const buttonStyle = {
    borderRadius: 13,
    padding: "7px 40px",
    backgroundColor: COLORS.dark,
    fontSize: "18px",
    textTransform: "none",
    fontFamily: "Open Sans",
}