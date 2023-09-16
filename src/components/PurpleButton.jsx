import * as React from 'react';
import Button from '@mui/material/Button';

export default function PurpleButton( {text} ) {
    return <Button
        style={{
            borderRadius: 15,
            padding: "10px 40px",
            backgroundColor: "#7724BF",
            fontSize: "18px",
            textTransform: "none",
        }}
        variant="contained"
    >{text}</Button>;
}



