import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logoCeluAlquilo from '../assets/logoCeluAlquilo.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { Container, InputAdornment, TextField } from "@mui/material";
import '../styles/header.css';


const LogoCeluAlquilo = () => {
    return (
        <Toolbar>
            <Box className='logoCeluAlquilo'
                component="img"
                sx={{
                    height: 50,
                }}
                alt="Logo de CeluAlquilo"
                src={logoCeluAlquilo}
            />
        </Toolbar>
    )
}

const Marcas = () => {
    return (
        <Typography
            className='brands'
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
        >
            <div className="brands">
                <p className="brandName">IPhone</p>
                <div className="separatorLine" />
                <p className="brandName">Xiaomi</p>
                <div className="separatorLine" />
                <p className="brandName">Samsung</p>
                <div className="separatorLine" />
                <p className="brandName">Huawei</p>
            </div>
        </Typography>
    )
}

const SearchBar = () => {

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                width: '100%',
            }}
        >
            <TextField
                type="search"
                defaultValue="Buscar..."
                sx={{ 
                    width: 380,
                    color: "#495057",
                 }}
                // value={searchTerm}
                // onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{ color: '#1B1D1F' }}/>
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    )
}


const LoginButton = ({ text }) => {
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


export default function Header() {
    return (
        <Box sx={{
            flexGrow: 1,
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1,
        }}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar sx={{
                    alignItems: 'flex-start',
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: "10px",
                }}>
                    <LogoCeluAlquilo />
                    <SearchBar />
                    <LoginButton text="Ingresar" />
                </Toolbar>
                <Toolbar sx={{
                    alignItems: 'flex-end',
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Marcas />
                </Toolbar>
            </AppBar>
        </Box >
    );
}