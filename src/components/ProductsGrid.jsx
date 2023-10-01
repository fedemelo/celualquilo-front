import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Grid from '@mui/material/Grid';
import PhoneCard from './PhoneCard';
import PaginationRounded from './Pagination';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { COLORS } from "../styles/colors";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function ProductsGrid({ titleText }) {

    const phoneList = localStorage.getItem('phoneList');
    const phoneListJson = JSON.parse(phoneList);

    const [selectedButton, setSelectedButton] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(currentPage);
    const itemsPerPage = 9;

    return (
        <Stack marginBottom={7}>
            <Title titleText={titleText} />
            <Grid container spacing={0} justifyContent="center" sx={{ marginTop: 'vw' }}>
                <Grid item xs={6} sm={6} md={6} lg={12} sx={{ marginLeft: '6rem', marginRight: '6rem', marginTop: '3rem', marginBottom: '3rem' }}>
                    <FilterButtons selectedButton={selectedButton} handleButtonClick={setSelectedButton} />
                </Grid>
            </Grid>
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid container sx={{ marginTop: 'vw', justifyContent: 'center' }}>
                    {phoneListJson.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product, index) => (
                        <Grid item key={index} sx={{ marginBottom: '3vw', marginLeft: '3vw', marginRight: '3vw' }} alignItems="center">
                            <Link to={"/products/" + product.id} style={{ textDecoration: 'none' }}>
                                <PhoneCard
                                    name={product.name}
                                    image={product.image}
                                    cost={product.price_per_day}
                                    rating={product.rating}
                                /></Link>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div style={centerStyle}>
                <PaginationRounded setCurrentPage={setCurrentPage} totalElements={phoneListJson.length} itemsPerPage={itemsPerPage} />
            </div>
        </Stack>
    );
};


const FilterButtons = ({ selectedButton, handleButtonClick }) => {

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


const Title = ({ titleText }) =>
    <div style={centerStyle}>
        <Typography variant="H1" sx={titleStyle}>
            {titleText}
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