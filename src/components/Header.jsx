import React from 'react';
import { useIntl } from "react-intl";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logoCeluAlquilo from '../assets/logoCeluAlquilo.png';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import '../styles/header.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HamburgerMenu from './HamburguerMenu';
import { Nav } from 'react-bootstrap';
import { SearchBar } from './SearchBar';


export default function Header() {
    const theme = useTheme();
    const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const intl = useIntl();

    const search = intl.formatMessage({ id: 'Header_Search' });
    const ingresar = intl.formatMessage({ id: 'Header_LogIn' });
    const text = localStorage.getItem("accUserName") ? localStorage.getItem("accUserName").split(' ')[0] : ingresar;
    const link = localStorage.getItem("accUserName") ? `/user` : `/Register`;


    return (
        <Box sx={boxStyle}>
            <AppBar position="static" sx={{ backgroundColor: "white" }}>
                <Toolbar sx={firstRowStyle}>
                    {onlySmallScreen &&
                        <HamburgerMenu />}
                    <LogoCeluAlquilo />
                    {!onlySmallScreen && <SearchBar text={search} />}
                    <LoginButton text={text} link={link} />
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
        <Nav.Link style={{ textDecoration: 'none' }} href="/">
            <Box className='logoCeluAlquilo'
                component="img"
                sx={{
                    height: 30,
                }}
                alt="Logo de CeluAlquilo"
                src={logoCeluAlquilo}
            />
        </Nav.Link>
    </Toolbar>



const Marcas = () =>

    <div className="brands">
        <Nav.Link style={{ textDecoration: 'none' }} href="/IPhone">
            <p className="brandName" data-testid="iPhone">iPhone</p>
        </Nav.Link>
        <div className="separatorLine" />
        <Nav.Link style={{ textDecoration: 'none' }} href="/Xiaomi">
            <p className="brandName" data-testid="Xiaomi">Xiaomi</p>
        </Nav.Link>
        <div className="separatorLine" />
        <Nav.Link style={{ textDecoration: 'none' }} href="/Samsung">
            <p className="brandName" data-testid="Samsung">Samsung</p>
        </Nav.Link>
        <div className="separatorLine" />
        <Nav.Link style={{ textDecoration: 'none' }} href="/Huawei">
            <p className="brandName" data-testid="Huawei">Huawei</p>
        </Nav.Link>
    </div>

const LoginButton = ({ text, link }) => {

    return (

        <Nav.Link style={{ textDecoration: 'none' }} href={link}>
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
        </Nav.Link>
    )
}

