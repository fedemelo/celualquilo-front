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
            <Box
                component="img"
                sx={{
                    height: 64,
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
            <div className="marcas">
                <p className="text-1">IPhone</p>
                <div className="line-1" />
                <p className="text-2">Xiaomi</p>
                <div className="line-2" />
                <p className="text-3">Samsung</p>
                <div className="line-3" />
                <p className="text-4">Huawei</p>
            </div>
        </Typography>
    )
}


export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar sx={{
                    alignItems: 'flex-start',
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
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