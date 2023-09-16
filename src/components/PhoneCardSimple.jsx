import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function PhoneCardSimple({ name, image, cost, days, buttonText }) {
    return (
        <Card sx={{
            height: "100%",
            maxWidth: "17vw",
            backgroundColor: "#f8f9fa",
        }}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
            </style>

            <MediaRatio image={image} name={name} />
            <CardContent>
                <Stack spacing={3}>

                    <Typography variant="body2" color="text.secondary"
                        sx={priceStyle}>
                        {cost}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div"
                        sx={nameStyle}
                    >
                        {name}
                    </Typography>
                    {days ? <Typography gutterBottom variant="h5" component="div"
                        sx={daysStyle}
                    >
                        {days}
                    </Typography> : null}
                    {buttonText ?
                        <LastButton text={buttonText} /> : null}
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
    lineHeight: "32%",
    color: "#495057",
    fontWeight: "bold",
}

const daysStyle = {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: "20px",
    fontFamily: "Open Sans",
    lineHeight: "32%",
    color: "#495057",
}


const LastButton = ({ text }) =>
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