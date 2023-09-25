import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
          iPhone
        </MenuItem>
        <MenuItem
          onClick={() => handleOptionClick('Xiaomi')}
          selected={selectedOption === 'Xiaomi'}
        >
          Xiaomi
        </MenuItem>
        <MenuItem
          onClick={() => handleOptionClick('Samsung')}
          selected={selectedOption === 'Samsung'}
        >
          Samsung
        </MenuItem>
        <MenuItem
          onClick={() => handleOptionClick('Huawei')}
          selected={selectedOption === 'Huawei'}
        >
          Huawei
        </MenuItem>
      </Menu>
    </div>
  );
}
