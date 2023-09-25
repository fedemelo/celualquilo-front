import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


export default function PhoneCardSimple({ name, image, cost, buttonText, route }) {
    return (
        <Card sx={{
            height: "100%",
            backgroundColor: "#f8f9fa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        }}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
            </style>

            <Box px={2}>
                <MediaRatio image={image} name={name} />
                <Typography variant="body2" color="text.secondary"
                    sx={priceStyle}>
                    {cost} USD/dia
                </Typography>
                <Typography variant="h5" component="div"
                    sx={nameStyle}
                >
                    {name}
                </Typography>
            </Box>
            <CardContent>
                <Stack spacing={3}>
                    {buttonText ?
                        <LastButton text={buttonText} route={route} /> : null}
                </Stack>
            </CardContent>
        </Card >
    );
}


const priceStyle = {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: "16px",
    fontFamily: "Open Sans",
    lineHeight: "1.5rem",
    color: "#b1b9c0",
    fontWeight: "bold",
}


const nameStyle = {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: "20px",
    fontFamily: "Open Sans",
    color: "#495057",
    fontWeight: "bold",
}



const LastButton = ({ text, route }) => <>
    <Link to={route}>
        <Button
            style={{
                borderRadius: 13,
                padding: "10px 40px",
                backgroundColor: "#7724BF",
                fontSize: "15px",
                textTransform: "none",
                fontFamily: "Open Sans",
            }}
            variant="contained"
        >{text}</Button>
    </Link>
</>


const MediaRatio = ({ image, name }) =>
    <Box sx={{
        p: 1
    }}>
        <AspectRatio
            objectFit="contain"
            variant="plain"
            height="100%"
            ratio="7/8"
        >
            <img
                src={image}
                alt={name}
            />
        </AspectRatio>
    </Box>
