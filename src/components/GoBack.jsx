import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { COLORS } from '../styles/colors';
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';


export default function GoBack({ text, route }) {
    return (
        <>
            <Link to={route} style={{ textDecoration: 'none' }}>
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
                        style={textStyle}
                    >{text}</Typography>
                </Toolbar>
            </Link>
        </>
    );
}


const textStyle = {
    fontFamily: 'Inter',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "30px",
    lineHeight: "36px",
    color: "#000000",
    cursor: "pointer",
    paddingLeft: "10px",
}