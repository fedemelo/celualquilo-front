import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const exampleName = "iPhone 14 Pro"
const moneda = "COP"
const pricePerDay = 10000
const examplePrice = "$100.000 "+moneda+"/día"
const taxPrice = "$19.000 "+moneda+"/día"
const total = "$119.000 "+moneda+"/día"

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

export default function PriceDetails(props) {
    return (
    <Card sx={cardStyle}>
        <Box display={"flex"} flexDirection={"column"} gap="15px">
        <Typography variant='h4' textAlign={'left'}>
            Detalle del precio de alquiler
           </Typography>
           <Box display={"flex"} justifyContent="space-between" >
                <Typography variant='h5'>
                    Precio por {props.dias} días
                </Typography>
                <Typography variant='h5'>
                    ${Number(pricePerDay)*(Number(props.dias))} {moneda}/dia
                </Typography>
           </Box>
           <Box display={"flex"} justifyContent="space-between">
                <Typography variant='h5'>
                   Impuestos 19%
                </Typography>
                <Typography variant='h5'>
                ${Number(pricePerDay)*(Number(props.dias))*0.19} {moneda}/dia
                </Typography>
           </Box>
           <Box height="48px">
           </Box>
<Divider/>
           <Box display={"flex"} justifyContent="space-between">
                <Typography variant='h5'>
                   Total + Impuestos
                </Typography>
                <Typography variant='h5'>
                ${Number(pricePerDay)*(Number(props.dias))*1.19} {moneda}/dia
                </Typography>
           </Box>
           

        </Box>
    </Card>
    );
}