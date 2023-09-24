import * as React from 'react';
import Card from '@mui/material/Card';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { TextField } from "@mui/material";
import PriceDetails from './PriceDetails';
import Box from '@mui/material/Box';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';



const exampleName = "iPhone 14 Pro"
const moneda = "COP"
const examplePrice = "$10.000 "+moneda+"/día"


export default function Billing() {
    return (
        <Grid container direction={'row'} spacing={2} marginBottom={8}>
            <Grid item xs={12} sm={6}>
                <BillingAddress />
                <PayingMethod />
            </Grid>
            <Grid item xs={12} sm={6}>
                <PriceDetails dias={5}/>
                <RentButton text="Finalizar compra" />
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
    padding: "30px",
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

const BillingAddress = ()=>
    <Card sx={cardStyle}>
    <Box display={"flex"} flexDirection={"column"} gap="30px">
    <Typography variant='h4' textAlign={'left'}>
        Dirección de facturación
    </Typography>
    <Box display={"flex"} gap="10px">
       <TextField
          required
          id="outlined-required"
          label="Dirección"
          defaultValue=""
          
        />
        <TextField
          required
          id="outlined-required"
          label="Ciudad"
          defaultValue=""
        />
    </Box>
    <Box display={"flex"} justifyContent="space-between">
        <TextField
            id="outlined-number"
            label="Numero de contacto"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            />
        </Box>
    </Box>
</Card>
let value = "Efectivo"
const PayingMethod = ()=>
<Card sx={cardStyle}>
    <Box display={"flex"} flexDirection={"column"} gap="30px">
    <Typography variant='h4' textAlign={'left'}>
        Método de Pago
    </Typography>
    <Box display={"flex"} gap="10px">
    <FormControl>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
  >
    <FormControlLabel value="female" control={<Radio />} label="Efectivo" />
    <FormControlLabel value="male" control={<Radio />} label="Tarjeta" />
  </RadioGroup>
</FormControl>
    </Box>
    </Box>
</Card>


