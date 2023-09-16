import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logoCeluAlquilo from '../assets/logoCeluAlquilo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import '../styles/header.css';


const LogoCeluAlquilo = function () {
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

const Marcas = function () {
    return (
        <Typography
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