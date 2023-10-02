import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';
import examplePhone1 from '../assets/phones/iPhone14Pro.png';
import examplePhone2 from '../assets/phones/HuaweiNovaY71.png';
import examplePhone3 from '../assets/phones/SamsungGalaxyS22.png';
import Breadcrumb from './BreadCrumb';

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

    const intl = useIntl();
    const favs = intl.formatMessage({ id: "Favourites_Title" })
    const rent = intl.formatMessage({ id: "Rent" })
    const BreadcrumbMiAccount = intl.formatMessage({ id: "BreadcrumbMiAccount" })

    return (
        <>
            <Breadcrumb breadcrumbs={[
                { href: '/mi-cuenta', text: BreadcrumbMiAccount },
                { href: '', text: favs },
            ]} />
            <Stack spacing={3.5} marginBottom={11}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
                </style>
                <Card sx={sectionStyle}>
                    <SectionTitle text={favs} />
                    <PhonesRow phones={exampleActiveRents} rent={rent}/>
                </Card>
            </Stack>
        </>
    );
}


const PhonesRow = ({ phones, rent }) => {
    return (
        <Grid container spacing={3} padding={2} >
            {phones.map((phone, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <PhoneCardSimple {...phone} route={`/products/${1}/rent`} buttonText={rent}/>
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