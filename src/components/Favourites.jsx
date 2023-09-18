import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';
import examplePhone1 from '../assets/phones/iPhone14Pro.png';
import examplePhone2 from '../assets/phones/HuaweiNovaY71.png';
import examplePhone3 from '../assets/phones/SamsungGalaxyS22.png';


const exampleActiveRents = [
    {
        name: "iPhone 12 Pro",
        days: "5 días de alquiler",
        image: examplePhone1,
        cost: "$ 10 000 COP / día",
        buttonText: "Alquilar",
    },
    {
        name: "Huawei Nova Y71",
        days: "2 días de alquiler",
        image: examplePhone2,
        cost: "$ 7 000 COP / día",
        buttonText: "Alquilar",
    },
    {
        name: "Samsung Galaxy S22",
        days: "1 día de alquiler",
        image: examplePhone3,
        cost: "$ 15 000 COP / día",
        buttonText: "Alquilar",
    },
]

export default function RentHistory() {
    return (
        <Stack spacing={3.5}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
            </style>
            <Card sx={sectionStyle}>
                <SectionTitle text="Favoritos" />
                <PhonesRow phones={exampleActiveRents} />
            </Card>
        </Stack>
    );
}

const PhonesRow = ({ phones }) => {
    return (
        <Grid container spacing={2} padding={4} >
            {phones.map((phone) => (
                <Grid item xs={4} sm={4}>
                    <PhoneCardSimple {...phone} />
                </Grid>
            ))}
        </Grid>
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
