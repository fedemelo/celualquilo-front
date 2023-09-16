import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logoCeluAlquilo from '../assets/logoCeluAlquilo.png';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
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

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        border: "0.125rem solid #b1b9c0",
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "0.125rem solid #b1b9c0",
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: '3em',
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (
        <Box sx={{ flexGrow: 0.6 }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Buscar..."
                    inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
        </Box>
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