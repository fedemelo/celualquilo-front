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

            <MediaRatio image={image} name={name} />
            <CardContent>
                <Stack spacing={3}>                    
                    <Typography gutterBottom variant="h5" component="div"
                        sx={nameStyle}
                    >
                        {name}
                    </Typography>
                    <div style={{ display: 'flex'}}>
                        <Typography variant="body2" color="text.secondary"
                            sx={priceStyle}>
                            {cost}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={ratingStyle} 
                            >
                            {rating}
                        </Typography>    
                        <StarIcon
                            sx={{ color: '#9E30FF', fontSize: '1.2vw',marginLeft: "0.4vw"}} 
                            fontSize="small"
                        />
                        
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                        onClick={toggleFavorite}
                        >
                        <FavoriteIcon
                            sx={{ color: isFavorite ? '#9E30FF' : '#7f7f7f',marginRight: "1vw",fontSize: "2vw"}}
                            fontSize="medium"
                        />
                        </div>
                    {buttonText ? <LastButton text={buttonText} /> : null}
                        
                    </div>       
                </Stack>
            </CardContent>
        </Card >
    );
}
const cardStyle = {
    height: "100%",
    width: "20.84vw",
    backgroundColor: "#F1F1F1",
    borderRadius: "15px",
    boxShadow: 3,
}

const ratingStyle = {
    textAlign: "right",
    verticalAlign: "middle",
    fontSize: "16px",
    fontFamily: "Open Sans",
    lineHeight: "1.5rem",
    color: "#495057",
    fontWeight: "medium",
    marginLeft: "1vw",
    width: "60%",
}

const priceStyle = {
    textAlign: "left",
    verticalAlign: "middle",
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
    lineHeight: "32%",
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
