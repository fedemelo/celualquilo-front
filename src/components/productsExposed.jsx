import React from 'react';
import Grid from '@mui/material/Grid';
import PhoneCard from './PhoneCard';
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
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { COLORS } from "../styles/colors";


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


export default function ProductsGrid() {
    return (
        <Stack marginBottom={7}>
            <Title />
            <Grid container spacing={0} justifyContent="center" sx={{ marginTop: 'vw' }}>
                <Grid item xs={6} sm={6} md={6} lg={12} sx={{ marginLeft: '6rem', marginRight: '6rem', marginTop: '3rem', marginBottom: '3rem' }}>
                    <FilterButtons />
                </Grid>
            </Grid>
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid container sx={{ marginTop: 'vw', justifyContent: 'center' }}>
                    {exampleActiveRents.map((product, index) => (
                        <Grid item key={index} sx={{ marginBottom: '3vw', marginLeft: '3vw', marginRight: '3vw' }} alignItems="center" disableEqualOverflow>
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
                <PaginationRounded />
            </div>
        </Stack>
    );
};


const FilterButtons = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (text) => {
        setSelectedButton(text);
    };

    return (
        <Grid container spacing={2} sx={{ alignContent: 'center' }}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text="Todos"
                    selected={selectedButton === 'Todos'}
                    onClick={() => handleButtonClick('Todos')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text="Populares"
                    selected={selectedButton === 'Populares'}
                    onClick={() => handleButtonClick('Populares')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text="Última Generación"
                    selected={selectedButton === 'Última Generación'}
                    onClick={() => handleButtonClick('Última Generación')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text="En Descuento"
                    selected={selectedButton === 'En Descuento'}
                    onClick={() => handleButtonClick('En Descuento')}
                />
            </Grid>
        </Grid>
    );
};

const FilterButton = ({ text, selected, onClick }) => {



    const filterButtonStyle = {
        fontFamily: 'Poppins',
        fontWeight: 500,
        fontSize: '20px',
        borderRadius: '10px',
        border: '1px solid #280C40',
        padding: '1vw 2vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        textTransform: 'none',
        width: '100%',
        maxWidth: '300px',
        minWidth: '200px', // Set a maximum width for the button
        whiteSpace: 'nowrap', // Prevent text from wrapping
        overflow: 'hidden', // Hide overflowing text
        textOverflow: 'ellipsis', // Add ellipsis for overflowed text
        color: selected ? 'white' : '#280C40',
        backgroundColor: selected ? COLORS.dark : '#E6CAFF',
    }

    return (
        <>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400&family=Open+Sans:wght@300;400&family=Poppins:wght@300;500&family=Space+Grotesk&display=swap');
            </style>
            <Button
                style={filterButtonStyle}
                variant="contained"
                onClick={onClick}
            >
                {text}
            </Button>
        </>
    );
};


const Title = () =>
    <div style={centerStyle} disableEqualOverflow>
        <Typography variant="H1" sx={titleStyle}>
            Nuestros Productos
        </Typography>
    </div>


const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};


const titleStyle = {
    color: '#280C40',
    fontFamily: 'Open Sans',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 'bold',
};
