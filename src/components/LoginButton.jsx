import * as React from 'react';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';

export default function LoginButton({ text }) {
    return <Button
        style={{
            borderRadius: 20,
            padding: "5px 20px",
            backgroundColor: COLORS.primary,
            fontSize: "18px",
            textTransform: "none",
        }}
        variant="contained"
    >{text}</Button>;
}



