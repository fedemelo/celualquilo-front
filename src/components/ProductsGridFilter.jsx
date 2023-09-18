import React from 'react';
import Grid from '@mui/material/Grid';
import PhoneCard from './PhoneCard';
import examplePhone1 from '../assets/phones/iPhone14Pro.png';
import examplePhone7 from '../assets/phones/iPhone13.png';
import PaginationRounded from './Pagination';
import Typography from '@mui/material/Typography';



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
        name: "iPhone 13",
        image: examplePhone7,
        cost: "COP 10 000 / día",
        buttonText: "Alquilar",
        rating: 4.9,
    },
]



export default function ProductsGridFilter({ brand }){
  return (
    <>
        <div style={centerStyle} disableEqualOverflow>
            <Typography variant="H1" sx={titleStyle}>
                { brand }
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