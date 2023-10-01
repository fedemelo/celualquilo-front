import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ProductsGrid from './ProductsGrid';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export default function ProductsGridPrice() {
    return (
        <>
            <Filter />
            <ProductsGrid />
        </>
    );
};

function Filter() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box sx={{
                width: '100%',
                height: 50,
                background: '#E5E5E5',
            }}>
                <Button
                    onClick={handleClick}
                    style={{
                        border: 0,
                        color: 'black',
                    }}
                >
                    <Typography variant="H1" sx={filterStyle}>
                        Filtrar por precios
                    </Typography>
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
                    <MenuItem onClick={handleClose}>
                        <Grid container justify="space-between" alignItems="center">
                            <Input
                                placeholder="Mínimo"
                                type="number"
                                sx={{
                                    width: 100,
                                }}
                            />
                            <Typography variant="H1" >
                                -
                            </Typography>
                            <Input
                                placeholder="Máximo"
                                type="number"
                                sx={{
                                    width: 100,
                                }}
                            />
                        </Grid>
                    </MenuItem>
                </Menu>
            </Box>
        </div>
    );
}


const filterStyle = {
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 'bold',
};