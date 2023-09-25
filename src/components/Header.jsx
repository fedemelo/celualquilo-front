import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logoCeluAlquilo from '../assets/logoCeluAlquilo.png';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { Container, InputAdornment, TextField } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/header.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HamburgerMenu from './HamburguerMenu';




export default function Header() {
const theme = useTheme();
const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


    return (
        <Box sx={boxStyle}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar sx={firstRowStyle}>
                {onlySmallScreen && 
                    <HamburgerMenu/>}
                    <LogoCeluAlquilo />
                    {!onlySmallScreen && <SearchBar />}
                    <LoginButton text="Ingresar" />
                </Toolbar>
                {!onlySmallScreen && <Toolbar sx={secondRowStyle}>
                    <Marcas />
                </Toolbar>}
            </AppBar>
        </Box >
    );
}

const boxStyle = {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
}


const firstRowStyle = {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "4px",
}


const secondRowStyle = {
    minHeight: "20px",
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
}


const LogoCeluAlquilo = () =>
    <Toolbar>
        <Box className='logoCeluAlquilo'
            component="img"
            sx={{
                height: 30,
            }}
            alt="Logo de CeluAlquilo"
            src={logoCeluAlquilo}
        />
    </Toolbar>



const Marcas = () =>
   
        <div className="brands">
            <p className="brandName">iPhone</p>
            <div className="separatorLine" />
            <p className="brandName">Xiaomi</p>
            <div className="separatorLine" />
            <p className="brandName">Samsung</p>
            <div className="separatorLine" />
            <p className="brandName">Huawei</p>
        </div>
 



const SearchBar = () =>
    <Container
        maxWidth="md"
        sx={{
            display: 'flex',
            width: '80%',
        }}
    >
        <TextField
            type="search"
            defaultValue="Buscar..."
            size='small'
            sx={{
                width: '100%',
                color: "#495057",
            }}
            // value={searchTerm}
            // onChange={handleChange}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon style={{ color: '#1B1D1F' }} />
                    </InputAdornment>
                ),
            }}
        />
    </Container>



const LoginButton = ({ text }) =>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(

        <div>

            <Button
                style={{
                    borderRadius: 20,
                    padding: "5px 15px",
                    backgroundColor: COLORS.primary,
                    fontSize: "15px",
                    textTransform: "none",
                }}
                variant="contained"
            >    
                {text}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >

                <MenuItem onClick={handleClose} sx={{ fontFamily: 'Inter', fontSize: 25 }}>Favoritos</MenuItem>
                <MenuItem onClick={handleClose} sx={{ fontFamily: 'Inter', fontSize: 25 }}>Historial de Alquileres</MenuItem>

            </Menu>

        </div>
    )
}

