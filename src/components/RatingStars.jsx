import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


const labels = {
    0.5: 'Inútil',
    1: 'Inútil',
    1.5: 'Malo',
    2: 'Malo',
    2.5: 'Regular',
    3: 'Regular',
    3.5: 'Bueno',
    4: 'Bueno',
    4.5: 'Excelente',
    5: 'Excelente',
};


const getLabelText = (value) => `${value} Estrella${value !== 1 ? 's' : ''}, ${labels[value]}`;


export default function HoverRating() {
    const [value, setValue] = React.useState(4.5);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box sx={boxStyle}>
            <Rating
                value={value}
                precision={0.5}
                size="large"
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}


const boxStyle = {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    paddingTop: "5px",
    paddingBottom: "5px",
}
