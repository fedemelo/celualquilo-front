import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/system';
import { COLORS } from '../styles/colors';
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export default function GoBack({ text }) {
    return (
        <Toolbar sx={{
            alignItems: 'flex-start',
            flexDirection: "row",
            paddingTop: "10px",
        }}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
            </style>
            <ArrowBackIcon
                style={{
                    color: COLORS.primary,
                    fontSize: "40px",
                    cursor: "pointer",
                }}
            // onClick={() => window.history.back()}
            />
            <Typography
                variant="h6"

                style={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "30px",
                    lineHeight: "36px",
                    color: "#000000",
                    cursor: "pointer",
                    paddingLeft: "10px",
                }}
            >{text}</Typography>
        </Toolbar>
    );
}
