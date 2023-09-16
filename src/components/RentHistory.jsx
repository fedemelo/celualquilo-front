import * as React from 'react';
import Card from '@mui/material/Card';
import examplePhone from '../assets/iPhone12Pro.jpg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';


const exampleActiveRents = [
    {
        name: "iPhone 12 Pro",
        days: "5 días de alquiler",
        image: examplePhone,
        cost: "$ 10 000 COP / día"
    },
    {
        name: "Huawey Nova Y71",
        days: "2 días de alquiler",
        image: examplePhone,
        cost: "$ 7 000 COP / día"
    },
    {
        name: "Samsung Galaxy S21",
        days: "1 día de alquiler",
        image: examplePhone,
        cost: "$ 15 000 COP / día"
    },
]


const examplePastRents = [
    {
        name: "iPhone 11",
        image: examplePhone,
        cost: "$ 10 000 COP / día"
    },
    {
        name: "Huawey Nova Y71",
        image: examplePhone,
        cost: "$ 7 000 COP / día"
    }
]


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

export default function Review() {
    return (
        <Stack spacing={2}>
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
    }}>{text}</Typography>

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
