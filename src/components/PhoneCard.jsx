import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { Grid } from '@mui/material';


export default function PhoneCard({ name, image, cost, buttonText, rating}) {
    const [isFavorite, setIsFavorite] = React.useState(false); // Initialize as false

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
        <Card sx={cardStyle}>
            <style>
                
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
            </style>
            
            <Box px={5} sx={{marginTop:'1.5rem'}} >
                <Typography gutterBottom variant="h5" component="div"
                        sx={nameStyle}
                    >
                        {name}
                    </Typography>
                        <Grid container spacing={0}>
                            <Grid item xs={9}>
                               <Typography xs={8} variant="body2" color="text.secondary"
                                    sx={priceStyle}>
                                    {cost} 
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={ratingStyle} 
                                >
                                {rating}
                                </Typography> 
                            </Grid> 
                            <Grid item xs={1} sx={{ verticalAlign: "middle"}}>
                                <StarIcon
                                    sx={{ color: '#9E30FF', fontSize: '1.2rem',marginLeft: "0.4vw",marginTop: "0.2vw"}} 
                                    fontSize="small"
                                />  
                            </Grid>  
                        </Grid>
            </Box>
            <MediaRatio image={image} name={name} />
            <CardContent>
                <Grid container spacing={0} sx={{alignItems:"center"}}>
                    <Grid item xs={2} onClick={toggleFavorite}>
                    <FavoriteIcon
                            sx={{ color: isFavorite ? '#9E30FF' : '#7f7f7f',fontSize: "2rem",verticalAlign: "middle"}}
                            fontSize="medium"
                    />
                    </Grid>
                    <Grid item xs={10}>
                    {buttonText ? <LastButton text={buttonText} /> : null}
                    </Grid>
                </Grid>         
            </CardContent>
        </Card >
    );
}
const cardStyle = {
    height: "100%",
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F1",
    borderRadius: "15px",
    boxShadow: 3,
}

const ratingStyle = {
    textAlign: "right",
    fontSize: "16px",
    fontFamily: "Open Sans",
    lineHeight: "1.5rem",
    color: "#495057",
    fontWeight: "medium",
    marginLeft: "1vw",
}

const priceStyle = {
    textAlign: "left",
    fontSize: "16px",
    fontFamily: "Open Sans",
    lineHeight: "1.5rem",
    color: "#495057",
    fontWeight: 500 ,
}

const nameStyle = {
    textAlign: "left",
    verticalAlign: "middle",
    fontSize: "20px",
    fontFamily: "Open Sans",
    color: "#495057",
    fontWeight: "bold",
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
            width: "100%",
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
