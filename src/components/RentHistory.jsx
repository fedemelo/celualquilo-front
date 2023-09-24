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
import examplePhone5 from '../assets/phones/SamsungA22.png';
import examplePhone6 from '../assets/phones/HuaweiMate50.png';
import examplePhone7 from '../assets/phones/iPhone13.png';
import examplePhone8 from '../assets/phones/HuaweiP60.png';
import examplePhone9 from '../assets/phones/HuaweiNovaY90.png';


const exampleActiveRents = [
    {
        name: "iPhone 12 Pro",
        days: "5 días de alquiler",
        image: examplePhone1,
        cost: "$ 10 000 COP / día",
        buttonText: "Renovar Alquiler",
    },
    {
        name: "Huawei Nova Y71",
        days: "2 días de alquiler",
        image: examplePhone2,
        cost: "$ 7 000 COP / día",
        buttonText: "Renovar Alquiler",
    },
    {
        name: "Samsung Galaxy S22",
        days: "1 día de alquiler",
        image: examplePhone3,
        cost: "$ 15 000 COP / día",
        buttonText: "Renovar Alquiler",
    },
    {
        name: "iPhone 13",
        image: examplePhone4,
        cost: "$ 10 000 COP / día",
        buttonText: "Alquilar",
    },
]


const examplePastRents = [
    {
        name: "OPPO Reno 7",
        image: examplePhone4,
        cost: "$ 10 000 COP / día",
        buttonText: "Escribir Reseña",
    },
    {
        name: "Samsung A22",
        image: examplePhone5,
        cost: "$ 7 000 COP / día",
        buttonText: "Escribir Reseña",
    },
    {
        name: "Huawei Mate 50",
        image: examplePhone6,
        cost: "$ 15 000 COP / día",
        buttonText: "Escribir Reseña",
    },
    {
        name: "iPhone 13",
        image: examplePhone7,
        cost: "$ 10 000 COP / día",
        buttonText: "Escribir Reseña",
    },
    {
        name: "Huawei P60",
        image: examplePhone8,
        cost: "$ 7 000 COP / día",
        buttonText: "Escribir Reseña",
    },
    {
        name: "Huawei Nova Y90",
        image: examplePhone9,
        cost: "$ 15 000 COP / día",
        buttonText: "Escribir Reseña",
    }

]


export default function RentHistory() {
    return (
        <Stack spacing={3.5} marginBottom={11}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
            </style>
            <Card sx={sectionStyle}>
                <SectionTitle text="Alquileres Activos" />
                <PhonesRow phones={exampleActiveRents} />
            </Card>
            <Card sx={sectionStyle}>
                <SectionTitle text="Historial de Alquileres" />
                <PhonesRow phones={examplePastRents} />
            </Card>
        </Stack>
    );
}


const sectionStyle = {
    width: "80vw",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
}


const PhonesRow = ({ phones }) => {
    return (
        <Grid container spacing={3} padding={2} >
            {phones.map((phone, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <PhoneCardSimple {...phone} />
                </Grid>
            ))}
        </Grid>
    );
}


const SectionTitle = ({ text }) =>
    <Typography sx={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "25px",
        lineHeight: "30px",
        color: "#000000",
        textAlign: "left",
        p: 2,
    }}>
        {text}
    </Typography>
