import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

const MediaRatio = ({ image, name }) =>
    <Box sx={{
        borderRadius: 'sm',
        p: 1
    }}>
        <AspectRatio objectFit="contain">
            <img
                src={image}
                alt={name}
            />
        </AspectRatio>
    </Box>


export default function PhoneCardSimple({ name, image, cost, days }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
            </style>

            <CardActionArea>
                <MediaRatio image={image} name={name} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary"
                        sx={{
                            textAlign: "left",
                            verticalAlign: "middle",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            lineHeight: "1.5rem",
                            color: "#b1b9c0",
                            fontWeight: "bold",
                            paddingBottom: "15px",
                        }}>
                        {cost}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div"
                        sx={{
                            textAlign: "left",
                            verticalAlign: "middle",
                            fontSize: "20px",
                            fontFamily: "Open Sans",
                            lineHeight: "32%",
                            color: "#495057",
                            fontWeight: "bold",
                            paddingBottom: "20px",

                        }}
                    >
                        {name}
                    </Typography>
                    {days ? <Typography gutterBottom variant="h5" component="div"
                        sx={{
                            textAlign: "left",
                            verticalAlign: "middle",
                            fontSize: "20px",
                            fontFamily: "Open Sans",
                            lineHeight: "32%",
                            color: "#495057",
                            fontWeight: "bold",

                        }}
                    >
                        {days}
                    </Typography> : null}
                </CardContent>
            </CardActionArea>

        </Card >
    );
}