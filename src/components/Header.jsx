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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/header.css';


export default function Header() {
    return (
        <Box sx={boxStyle}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar sx={firstRowStyle}>
                    <LogoCeluAlquilo />
                    <SearchBar />
                    <LoginButton text="Ingresar" />
                </Toolbar>
                <Toolbar sx={secondRowStyle}>
                    <Marcas />
                </Toolbar>
            </AppBar>
        </Box >
    );
}


const boxStyle = {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1,
}


const firstRowStyle = {
    alignItems: 'flex-start',
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: "10px",
}


const secondRowStyle = {
    alignItems: 'flex-end',
    flexDirection: "row",
    justifyContent: "space-between",
}


const LogoCeluAlquilo = () =>
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



const Marcas = () =>
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



const SearchBar = () =>
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
                    padding: "5px 20px",
                    backgroundColor: COLORS.primary,
                    fontSize: "18px",
                    textTransform: "none",
                }}
                variant="contained"
                onClick={handleClick}
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

