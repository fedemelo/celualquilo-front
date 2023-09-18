import * as React from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { TextField } from "@mui/material";
import Divider from '@mui/material/Divider';

const exampleName = "iPhone 14 Pro"
const moneda = "COP"
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
                    {examplePrice}
                </Typography>
           </Box>
           <Box display={"flex"} justifyContent="space-between">
                <Typography variant='h5'>
                   Impuestos 19%
                </Typography>
                <Typography variant='h5'>
                    {taxPrice}
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
                    {total}
                </Typography>
           </Box>
           

        </Box>
    </Card>
    );
}