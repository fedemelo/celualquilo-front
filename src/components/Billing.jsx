import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { TextField } from "@mui/material";
import PriceDetails from './PriceDetails';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';


export default function Billing() {
    return (
        <Grid container direction={'row'} spacing={2} marginBottom={8}>
            <Grid item xs={12} sm={6}>
                <BillingAddress />
                <PayingMethod />
            </Grid>
            <Grid item xs={12} sm={6}>
                <PriceDetails dias={5} />
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


const RentButton = ({ text }) => {

    const clickFinalizarCompra = (() => {
    })

    return (< Button
        style={{
            borderRadius: 20,
            padding: "5px 20px",
            backgroundColor: COLORS.primary,
            fontSize: "25px",
            textTransform: "none",
            width: "100%",
        }
        }
        onClick={clickFinalizarCompra}
        variant="contained"
    > {text}</Button >)
}

const BillingAddress = () => {

    const [formValues, setFormValues] = useState({ address: "", city: "", number: "0" })

    const handleAddressChange = ((e) => {
        setFormValues({ ...formValues, address: e.target.value })
    });

    const handleCityChange = ((e) => {
        setFormValues({ ...formValues, city: e.target.value })
    });

    const handleNumberChange = ((e) => {
        setFormValues({ ...formValues, number: e.target.value })
    });


    const getProblemInAddress = () => {
        const address = formValues.address.trim();

        if (!address.length > 0) return "Debes ingresar una dirección."


        if ((address.length < 4) || (!/^(Carrera|Calle|Transversal|Diagonal|Circular|Avenida|Autopista)/.test(address))) return "La dirección debe empezar por: Carrera, Calle, Transversal, Diagonal, Circular, Avenida o Autopista."


        if (!/\d/.test(address)) return "La dirección debe incluir un número."


        const parts = address.split(' ');

        const number = parts[1];
        if (!/^\d+[a-zA-Z]*$/.test(number)) return "El número de la dirección puede contener números y letras opcionales (ejemplo: 14b)"


        if (parts[2] !== '#') return "Después del número, la dirección debe incluir el símbolo '#' y un espacio."


        const hyphenPart = parts[3];
        if (!/^\d+[a-zA-Z]*-\d+$/.test(hyphenPart)) return "La parte después del '#' debe estar en el formato número, guión, número (ejemplo: 197-65)."


        // If none of the conditions above are met, the address is valid
        return null;
    };


    const getProblemInCity = () => {

        const city = formValues.city.trim();

        if (city.length === 0) return "Debes ingresar una ciudad."

        if (/\d/.test(city)) return "La ciudad no puede contener números."

        if (city.length < 2) return "La ciudad debe contener más de una letra."
    }


    const getProblemInNumber = () => {
        const number = formValues.number.trim();

        if (number.length === 0) return "Debes ingresar un número de contacto."


        if (!/^\d{9}$/.test(number)) return "El número de contacto debe consistir de 9 dígitos contiguos."

    }


    return <Card sx={cardStyle}>
        <Box display={"flex"} flexDirection={"column"} gap="30px">
            <Typography variant='h4' textAlign={'left'}>
                Dirección de facturación
            </Typography>
            <Box display={"flex"} gap="10px">

                <FormControl>
                    <TextField
                        color={!getProblemInAddress() ? "success" : "error"}
                        required
                        id="outlined-required"
                        label="Dirección"
                        defaultValue=""
                        onChange={handleAddressChange}
                    />
                    {<Typography variant='body1' color={"red"}>{getProblemInAddress()}</Typography>}
                </FormControl>

                <FormControl>
                    <TextField
                        color={!getProblemInCity() ? "success" : "error"}
                        required
                        id="outlined-required"
                        label="Ciudad"
                        defaultValue=""
                        onChange={handleCityChange}
                    />
                    {<Typography variant='body1' color={"red"}>{getProblemInCity()}</Typography>}
                </FormControl>

            </Box>
            <Box display={"flex"} justifyContent="space-between">

                <FormControl>
                    <TextField
                        color={!getProblemInNumber() ? "success" : "error"}
                        required
                        id="outlined-required"
                        label="Número de contacto"
                        defaultValue=""
                        onChange={handleNumberChange}
                    />
                    {<Typography variant='body1' color={"red"}>{getProblemInNumber()}</Typography>}
                </FormControl>
            </Box>
        </Box>
    </Card>
}


let value = "Efectivo"
const PayingMethod = () => <Card sx={cardStyle}>
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


