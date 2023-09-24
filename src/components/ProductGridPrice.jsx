import React from 'react';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import PhoneCard from './PhoneCard';
import Pagination from './Pagination';
import { COLORS } from '../styles/colors';
import examplePhone1 from '../assets/phones/iPhone14Pro.png';
import examplePhone2 from '../assets/phones/HuaweiNovaY71.png';
import examplePhone3 from '../assets/phones/SamsungGalaxyS22.png';
import examplePhone4 from '../assets/phones/OPPOReno7.png';
import examplePhone5 from '../assets/phones/SamsungA22.png';
import examplePhone6 from '../assets/phones/HuaweiMate50.png';
import examplePhone7 from '../assets/phones/iPhone13.png';
import examplePhone8 from '../assets/phones/HuaweiP60.png';
import examplePhone9 from '../assets/phones/HuaweiNovaY90.png';
import PaginationRounded from './Pagination';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



const exampleActiveRents = [
    {
        name: "iPhone 12 Pro",
        days: "5 días de alquiler",
        image: examplePhone1,
        cost: "COP 10 000 / día",
        buttonText: "Alquilar",
        rating: 4.4,
    },
    {
        name: "Huawei Nova Y71",
        days: "2 días de alquiler",
        image: examplePhone2,
        cost: "COP 7 000 / día",
        buttonText: "Alquilar",
        rating: 4.8,
    },
    {
        name: "Samsung Galaxy S22",
        days: "1 día de alquiler",
        image: examplePhone3,
        cost: "COP 15 000 / día",
        buttonText: "Alquilar",
        rating: 5.0,
    },
    {
        name: "OPPO Reno 7",
        image: examplePhone4,
        cost: "COP 10 000 / día",
        buttonText: "Alquilar",
        rating: 4.9,
    },
    {
        name: "Samsung A22",
        image: examplePhone5,
        cost: "COP 7 000 / día",
        buttonText: "Alquilar",
        rating: 4.7,
    },
    {
        name: "Huawei Mate 50",
        image: examplePhone6,
        cost: "COP 15 000 / día",
        buttonText: "Alquilar",
        rating: 4.6,
    },
    {
        name: "iPhone 13",
        image: examplePhone7,
        cost: "COP 10 000 / día",
        buttonText: "Alquilar",
        rating: 4.9,
    },
    {
        name: "Huawei P60",
        image: examplePhone8,
        cost: "COP 7 000 / día",
        buttonText: "Alquilar",
        rating: 4.7,
    },
    {
        name: "Huawei Nova Y90",
        image: examplePhone9,
        cost: "COP 15 000 / día",
        buttonText: "Alquilar",
        rating: 4.8,
    }
]



export default function ProductsGrid(){
  return (
    <>
        <Filter/>
        <div style={centerStyle} disableEqualOverflow>

            
            <Typography variant="H1" sx={titleStyle}>
                Nuestros Productos
            </Typography>
        </div>
        <div style={{alignItems:'center', justifyContent: 'center'}}>
          <Grid container sx={{ marginTop: 'vw', justifyContent: 'center'} }>
        {exampleActiveRents.map((product, index) => (
            <Grid item key={index} sx={{ marginBottom: '3vw', marginLeft:'3vw',marginRight:'3vw'}} alignItems="center"  disableEqualOverflow>
            <PhoneCard
                name={product.name}
                image={product.image}
                cost={product.cost}
                buttonText={product.buttonText}
                rating={product.rating}
            />
            </Grid>
        ))}
        </Grid>  
        </div>
        <div style={centerStyle} disableEqualOverflow>
            <PaginationRounded/>
        </div>
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


const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh', // Center vertically within the viewport
  };

const titleStyle = {
    color: '#280C40',
    fontFamily: 'Open Sans',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginTop: '7vw',
    marginBottom: '7vw',
};

const filterStyle = {
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 'bold',
};