import * as React from 'react';
import Card from '@mui/material/Card';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { Box, TextField } from "@mui/material";
import PriceDetails from './PriceDetails';
import { useState } from 'react';
import Breadcrumb from './BreadCrumb';



const exampleName = "iPhone 14 Pro"
const moneda = "COP"
const examplePrice = "$10.000 " + moneda + "/día"

export default function RentDetail() {
    const [dias, setDias] = React.useState('5');
    return (
        <Grid container spacing={0}>
            <Breadcrumb breadcrumbs={[{ href: '', text: 'Detalles del Alquiler' }]} />
            <Grid container direction={'row'} spacing={2} marginBottom={8}>
                <Grid item xs={12} md={6}>
                    <PhoneResume setDias={setDias} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <PriceDetails dias={dias} />
                    <RentButton text="Continuar pago" />
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




const RentButton = ({ text }) =>
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
    >{text}</Button>;

const PhoneResume = ({ setDias }) => {

    const [formValues, setFormValues] = useState({ address: "", city: "", number: "0" })


    const handleDaysChange = ((e) => {
        setFormValues({ ...formValues, number: e.target.value })
    });

    const getProblemInNumber = () => {

        const number = formValues.number.trim();

        if (number.length === 0) return "Debes ingresar un número de días de alquiler."

        if (!/\d+/.test(number)) return "El número de días debe ser un número."
    }

    return <Card sx={cardStyle} >
        <Box display={"flex"} justifyContent="center">
            <Box display={"flex"} justifyItems="center" padding="1rem">
                <img src={examplePhone} alt={exampleName} style={{ maxWidth: '130%' }} />
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap="15px" justifyContent="center" padding="2rem">
                <Typography variant='h4' textAlign={'left'}> {exampleName} </Typography>
                <Typography variant='h5' textAlign={'left'}> {examplePrice} </Typography>
                <TextField
                    color={!getProblemInNumber() ? "success" : "error"}
                    required
                    id="outlined-required"
                    defaultValue="5"
                    label="Días de alquiler"
                    onChange={handleDaysChange}
                />
                {<Typography variant='body1' color={"red"}>{getProblemInNumber()}</Typography>}
            </Box>
        </Box>

    </Card>

}
