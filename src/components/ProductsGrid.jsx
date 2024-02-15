/* eslint-disable */
import React from 'react';
import { useIntl } from "react-intl";
import Grid from '@mui/material/Grid';
import PhoneCard from './PhoneCard';
import PaginationRounded from './Pagination';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { COLORS } from "../styles/colors";
import { useState, useEffect } from 'react';
import FilterSection from './FiltersSection';
import { useLocation } from 'react-router-dom';


export default function ProductsGrid({ titleText }) {

    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryTerm = searchParams.get('search');
        setSearchTerm(queryTerm || '');
    }, [location.search]);

    const phoneList = localStorage.getItem('phoneList');
    const phoneListJson = JSON.parse(phoneList);

    const [filtros, setFiltros] = useState({ PrecioMin: null, PrecioMax: null, Marcas: { samsung: false, apple: false, huawei: false, xiaomi: false, } })

    const [selectedButton, setSelectedButton] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const intl = useIntl();
    const ProductsList_OurProducts = intl.formatMessage({ id: 'ProductsList_OurProducts' });

    const ProductsList_LablelPopular = intl.formatMessage({ id: 'ProductsList_LablelPopular' });
    const ProductsList_LablelLastGen = intl.formatMessage({ id: 'ProductsList_LablelLastGen' });
    const ProductsList_LablelDiscount = intl.formatMessage({ id: 'ProductsList_LablelDiscount' });

    let titulo = ""

    if (titleText === "Nuestros Productos") {
        titulo = ProductsList_OurProducts;
    } else {
        titulo = titleText;
    }


    const filteredPhoneList = phoneListJson
        .filter((product) => {
            // Filter by price

            const precio = parseFloat(product.pricePerDay);

            const precioMin = filtros.PrecioMin ? parseFloat(filtros.PrecioMin) : Number.NEGATIVE_INFINITY;
            const precioMax = filtros.PrecioMax ? parseFloat(filtros.PrecioMax) : Number.POSITIVE_INFINITY;
            const marcas = filtros.Marcas;
            const marca = Object.values(marcas).every((value) => !value) || marcas[product.brand.name.toLowerCase()];
            return precio >= precioMin && precio <= precioMax && marca;
        }).filter((product) => {

            // Filter by searchbar

            if (searchTerm == "")
                return true;


            const format = (str) => str.replace(/\s/g, '').toLowerCase();

            const formattedSearchTerm = format(searchTerm)
            const formattedName = format(product.name)
            const formattedMemSpecs = format(product.memorySpecs)
            const formattedCamSpecs = format(product.cameraSpecs)
            const formattedScreenSpecs = format(product.screenSpecs)

            const found = formattedName.includes(formattedSearchTerm) || formattedSearchTerm.includes(formattedName) ||
                formattedMemSpecs.includes(formattedSearchTerm) || formattedSearchTerm.includes(formattedMemSpecs) ||
                formattedCamSpecs.includes(formattedSearchTerm) || formattedSearchTerm.includes(formattedCamSpecs) ||
                formattedScreenSpecs.includes(formattedSearchTerm) || formattedSearchTerm.includes(formattedScreenSpecs)

            return found;
        }).filter((product) => {

            // Filter by buttons

            if (selectedButton == "" || selectedButton == "Todos")
                return true;
            if (selectedButton == "Populares") {
                return product.rating >= 4.5;
            } else if (selectedButton == "Última Generación") {
                return product.isLastGeneration;
            } else if (selectedButton == "En Descuento") {
                return product.isOnSale;
            } else {
                return true;
            }

        }).filter((product) => {
            const format = (str) => str.replace(/\s/g, '').toLowerCase();
            const formatedBrand = format(titleText)

            if (formatedBrand == "iphone" || formatedBrand == "samsung" || formatedBrand == "huawei" || formatedBrand == "xiaomi") {

                const formattedName = format(product.name)
                const formatedBrand = format(titleText)

                return formatedBrand.includes(formattedName) || formattedName.includes(formatedBrand)
            }

            return true;
        });


    return (
        <Stack marginBottom={7}>
            <Title titleText={titulo} data-testid={titulo} />
            <Grid container spacing={0} justifyContent="center" sx={{ marginTop: 'vw' }}>
                <Grid item xs={6} sm={6} md={6} lg={12} sx={{ marginLeft: '6rem', marginRight: '6rem', marginTop: '3rem', marginBottom: '3rem' }}>
                    <FilterButtons selectedButton={selectedButton} handleButtonClick={setSelectedButton} />
                </Grid>
            </Grid>
            <FilterSection filtros={filtros} setFiltros={setFiltros} />
            <div style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Grid container sx={{ marginTop: 'vw', justifyContent: 'center' }}>
                    {filteredPhoneList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product, index) => (
                        <Grid item key={product.id} sx={{ marginBottom: '3vw', marginLeft: '3vw', marginRight: '3vw' }} alignItems="center">
                            <PhoneCard
                                name={product.name}
                                image={product.image}
                                cost={product.pricePerDay}
                                rating={product.rating}
                                phoneId={product.id}
                            />
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

    const intl = useIntl();
    const ProductsList_LablelAll = intl.formatMessage({ id: 'ProductsList_LablelAll' });
    const ProductsList_LablelPopular = intl.formatMessage({ id: 'ProductsList_LablelPopular' });
    const ProductsList_LablelLastGen = intl.formatMessage({ id: 'ProductsList_LablelLastGen' });
    const ProductsList_LablelDiscount = intl.formatMessage({ id: 'ProductsList_LablelDiscount' });

    return (
        <Grid container spacing={2} sx={{ alignContent: 'center' }}>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text={ProductsList_LablelAll}
                    selected={selectedButton === 'Todos'}
                    onClick={() => handleButtonClick('Todos')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text={ProductsList_LablelPopular}
                    selected={selectedButton === 'Populares'}
                    onClick={() => handleButtonClick('Populares')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text={ProductsList_LablelLastGen}
                    selected={selectedButton === 'Última Generación'}
                    onClick={() => handleButtonClick('Última Generación')}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={3}>
                <FilterButton
                    text={ProductsList_LablelDiscount}
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