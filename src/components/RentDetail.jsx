import * as React from 'react';
import Card from '@mui/material/Card';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { TextField } from "@mui/material";
import PriceDetails from './PriceDetails';



const exampleName = "iPhone 14 Pro"
const moneda = "COP"
const examplePrice = "$10.000 "+moneda+"/día"


export default function RentDetail() {
    return (
        <Grid container direction={'row'} spacing={2} >
            <Grid item xs={12} sm={6}>
                <PhoneResume />
            </Grid>
            <Grid item xs={12} sm={6}>
                <PriceDetails dias={5}/>
                <RentButton text="Continuar pago" />
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

const PhoneResume = ()=>
    <Card sx={cardStyle}>
    <Grid container direction={'row'} alignItems={'center'} >
        {/* Column for Image */}
        <Grid item xs={6} >
            <img
                style={{ maxWidth: '100%', height: '20vw' }}
                alt={exampleName}
                src={examplePhone}
            />
        </Grid>

        <Grid item xs={6} rowSpacing={28} >
            <Typography variant="h4" component="div">
                {exampleName}
            </Typography>
            <Typography variant="h5" component="div" paddingTop={3} paddingBottom={3}>
                {examplePrice}
            </Typography>
            <TextField
                required
                id="outlined-required"
                label="Días de alquiler"
                defaultValue="5"
            />

        </Grid>

    </Grid>
</Card>


