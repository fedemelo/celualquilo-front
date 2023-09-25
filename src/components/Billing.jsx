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
import { Link } from 'react-router-dom';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Breadcrumb from './BreadCrumb';

export default function Billing() {
    let dias = localStorage.getItem("dias");
    return (
        <>
            <Breadcrumb breadcrumbs={[
                { href: `/products/${1}`, text: 'Alquilar' },
                { href: `/products/${1}/rent`, text: 'Detalles de Alquiler' },
                { href: '', text: 'Dirección y Facturación' },
            ]} />
            <Grid container direction={'row'} spacing={2} marginBottom={8}>
                <Grid item xs={12} sm={6}>
                    <BillingAddress />
                    <PayingMethod />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PriceDetails dias={dias} />
                    <RentButton text="Finalizar compra" />
                </Grid>
            </Grid>
        </>
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

    return (
    <>
    <Link to={"/RentHistory"}>
    < Button
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
    > {text}</Button >
    </Link>
    </>
    )
}

const BillingAddress = () => {

    const [formValues, setFormValues] = useState({ address: "", city: "", number: "0" })
    const [clickedFields, setClickedFields] = useState({ address: false, city: false, number: false })


    const getProblemInAddress = () => {
        const address = formValues.address.trim();

        if (!clickedFields.address) return null;

        if (!address.length > 0) return "Debes ingresar una dirección."


        if ((address.length < 4) || (!/^(Carrera|Calle|Transversal|Diagonal|Circular|Avenida|Autopista)/.test(address))) return "La dirección debe empezar por: Carrera, Calle, Transversal, Diagonal, Circular, Avenida o Autopista."


        if (!/\d/.test(address)) return "La dirección debe seguir con un espacio y un número."


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

        if (!clickedFields.city) return null;

        if (city.length === 0) return "Debes ingresar una ciudad."

        if (/\d/.test(city)) return "La ciudad no puede contener números."

        if (city.length < 2) return "La ciudad debe contener más de una letra."
    }


    const getProblemInNumber = () => {
        const number = formValues.number.trim();

        if (!clickedFields.number) return null;

        if (String(number).length === 0) return "Debes ingresar un número de contacto."

        const numeros = [{ digito: 0, número: "ceros" }, { digito: 1, número: "unos" }, { digito: 2, número: "doses" },
        { digito: 3, número: "treses" }, { digito: 4, número: "cuatros" }, { digito: 5, número: "cincos" }, { digito: 6, número: "seises" },
        { digito: 7, número: "sietes" }, { digito: 8, número: "ochos" }, { digito: 9, número: "nueves" }]

        for (const numero of numeros) {
            if (new RegExp("^" + numero.digito + "+$").test(number)) return "El número no puede consistir de únicamente " + numero.número + "."
        }

        if (/^[0]/.test(number)) return "El número de contacto no puede empezar por cero."

        if (!/^\d{10}$/.test(number)) return "El número de contacto debe consistir de 10 dígitos contiguos."

        return null;

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
                        onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
                        onClick={() => setClickedFields({ ...clickedFields, address: true })}
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
                        onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                        onClick={() => setClickedFields({ ...clickedFields, city: true })}
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
                        onChange={(e) => setFormValues({ ...formValues, number: e.target.value })}
                        onClick={() => setClickedFields({ ...clickedFields, number: true })}
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


