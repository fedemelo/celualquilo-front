import React from 'react';
import Button from '@mui/material/Button';


export default function RentButton({ text }) {
    return <Button
        style={buttonStyle}
        variant="contained"
    >{text}</Button>;
}


const buttonStyle = {
    borderRadius: 13,
    padding: "10px 40px",
    backgroundColor: "#7724BF",
    fontSize: "18px",
    textTransform: "none",
}
