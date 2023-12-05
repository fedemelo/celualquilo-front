import React from 'react';
import { useIntl } from "react-intl";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

export default function HoverRating({ setRevrating }) {

    const intl = useIntl();

    const [value, setValue] = React.useState(4.5);
    const [hover, setHover] = React.useState(-1);

    const labels = {
        0.5: intl.formatMessage({ id: "Useless" }),
        1: intl.formatMessage({ id: "Useless" }),
        1.5: intl.formatMessage({ id: "Bad" }),
        2: intl.formatMessage({ id: "Bad" }),
        2.5: intl.formatMessage({ id: "Average" }),
        3: intl.formatMessage({ id: "Average" }),
        3.5: intl.formatMessage({ id: "Good" }),
        4: intl.formatMessage({ id: "Good" }),
        4.5: intl.formatMessage({ id: "Excellent" }),
        5: intl.formatMessage({ id: "Excellent" }),
    };

    return (
        <Box sx={boxStyle}>
            <Rating
                value={value}
                precision={0.5}
                size="large"
                getLabelText={(value) => `${value} Estrella${value !== 1 ? 's' : ''}, ${labels[value]}`}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    setRevrating(newValue);
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
