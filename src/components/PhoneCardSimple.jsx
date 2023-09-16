import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function PhoneCardSimple({ name, image, cost, days }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {cost}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    {days ? <Typography gutterBottom variant="h5" component="div">
                        {days}
                    </Typography> : null}
                </CardContent>
            </CardActionArea>

        </Card>
    );
}