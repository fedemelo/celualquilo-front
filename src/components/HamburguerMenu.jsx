import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Nav } from 'react-bootstrap';

export default function HamburgerMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleClose();
    };

    return (
        <div>
            <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="black" // Customize the color
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => handleOptionClick('iPhone')}
                    selected={selectedOption === 'iPhone'}

                >
                    <Nav.Link style={estilo} href="/iPhone">iPhone</Nav.Link>
                </MenuItem>
                <MenuItem
                    onClick={() => handleOptionClick('Xiaomi')}
                    selected={selectedOption === 'Xiaomi'}

                >
                    <Nav.Link style={estilo} href="/Xiaomi">Xiaomi</Nav.Link>
                </MenuItem>
                <MenuItem
                    onClick={() => handleOptionClick('Samsung')}
                    selected={selectedOption === 'Samsung'}
                >
                    <Nav.Link style={estilo} href="/Samsung">Samsung</Nav.Link>
                </MenuItem>
                <MenuItem
                    onClick={() => handleOptionClick('Huawei')}
                    selected={selectedOption === 'Huawei'}
                >
                    <Nav.Link style={estilo} href="/Huawei">Huawei</Nav.Link>
                </MenuItem>
            </Menu>
        </div>
    );
}


const estilo = {
    textDecoration: 'none',
    color: "#000000",
}