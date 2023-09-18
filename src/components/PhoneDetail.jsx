import * as React from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';


const exampleBrand = "Marca: Apple"
const exampleAvailability = "Disponibilidad: 10 en Stock"

const exampleName = "iPhone 14 Pro"

const exampleSpecs = [
    "Brillo máximo de 800 nits (normal); brillo máximo de 1.200 nits (HDR)",
    "Resistencia a las salpicaduras, el agua y el polvo IP68 (hasta 6 metros de profundidad durante un máximo de 30 minutos, según la norma IEC 60529)",
    "Chip A14 Bionic; Neural Engine de última generación",
]

const moneda = "COP"
const examplePrice = "$10.000 "+moneda+"/día"


export default function Review() {
    return (
        <Card sx={cardStyle}>
            <Grid container spacing={0} padding={3} direction={'row'} alignItems={'center'}>
                {/* Column for Image */}
                <Grid item xs={12} sm={5}>
                    <img
                        style={{ maxWidth: '130%', height: '30vw' }}
                        alt={exampleName}
                        src={examplePhone}
                    />
                </Grid>

                <Grid item xs={12} sm={7
                } sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" color="text.primary" padding={1}>
                        {exampleBrand}
                    </Typography>
                    <Typography variant="h6" color="text.primary" padding={1}>
                        {exampleAvailability}
                    </Typography>
                    <Typography variant="h3" component="div" padding={1}>
                        {exampleName}
                    </Typography>
                    <Rating name="read-only" value={5} readOnly size="large" />
                    <SpecList specs={exampleSpecs} />
                    <Typography variant="h4" component="div" padding={1}>
                        {examplePrice}
                    </Typography>
                    <RentButton text="Alquilar" />
                </Grid>

            </Grid>
        </Card>
    );
}


const cardStyle = {
    width: "80vw",
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

const RentButton = ({ text }) =>
    <Button
        style={{
            borderRadius: 20,
            padding: "5px 20px",
            backgroundColor: COLORS.primary,
            fontSize: "25px",
            textTransform: "none",
        }}
        variant="contained"
    >{text}</Button>;



