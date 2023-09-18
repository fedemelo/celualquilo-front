import React from 'react';
import RentButton from './components/RentButton';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';
import GoBack from './components/GoBack';
import Review from './components/Review';
import Breadcrumb from './components/BreadCrumb';
import RentHistory from './components/RentHistory';
import PhoneCard from './components/PhoneCard';
import examplePhone8 from './assets/phones/HuaweiP60.png';
import ProductsGrid from './components/productsExposed';
import Favourites from './components/Favourites';

export default function App() {
    return (
        <div className="App">
            <Header />

            {/* Especificar en este punto la historia de usuario que se desea visualizar */}
            <HU6 />
            {/* <HU8 /> */}

            <Footer />
        </div>
    );
}


const HU1 = () => {
    return (
        <>
            <h3>HU1: Registrar un usuario</h3>
            <p>Detalla: David Burgos</p>
            <p>Revisa: Santiago Martínez</p>
        </>
    )
}


const HU2 = () => {
    return (
        <>
            <h3>HU2: Iniciar Sesión</h3>
            <p>Detalla: Santiago Martínez</p>
            <p>Revisa: Federico Melo </p>
        </>
    )
}


const HU3 = () => {
    return (
        <>
            <h3>HU3: Ver Teléfonos Disponibles</h3>
            <p>Detalla: Federico Melo </p>
            <p>Revisa: Mariana Ruiz</p>
            <RentButton text="Alquilar" />
        </>
    )
}


const HU4 = () => {
    return (
        <>
            <h3>HU4: Ver información del Teléfono</h3>
            <p>Detalla: Mariana Ruiz</p>
            <p>Revisa: David Burgos</p>
            <RentButton text="Alquilar" />
        </>
    )
}


const HU5 = () => {
    return (
        <>
            <h3>HU5: Alquilar Teléfono</h3>
            <p>Detalla: David Burgos</p>
            <p>Revisa: Santiago Martínez</p>
        </>
    )
}


const HU6 = () => {
    return (
        <>
            <h3>HU6: Realizar pago en plataforma</h3>
            <p>Detalla: Santiago Martínez</p>
            <p>Revisa: Federico Melo </p>
            <ProductsGrid/>
        </>
        
    )
}


const HU7 = () => {
    const breadcrumbs = [
        { href: '/mi-cuenta', text: 'Mi cuenta' },
        { href: '', text: 'Historial de Alquileres' },
    ];

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <RentHistory />
        </>
    );
}


const HU8 = () =>
    <>
        <GoBack text="Escribir reseña" />
        <Review />
    </>



const HU9 = () => {
    return (
        <>
            <h3>HU9: Ver historial de celulares</h3>
            <p>Detalla: David Burgos</p>
            <p>Revisa: Santiago Martínez</p>
        </>
    )
}


const HU10 = () => {
    const breadcrumbs = [
        { href: '/mi-cuenta', text: 'Mi cuenta' },
        { href: '', text: 'Favoritos' },
    ];

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Favourites />
        </>
    );
}


const HU11 = () => {
    return (
        <>
            <h3>HU11: Filtrar celulares por precio</h3>
            <p>Detalla: Federico Melo </p>
            <p>Revisa: Mariana Ruiz</p>
        </>
    )
}


const HU12 = () => {
    return (
        <>
            <h3>HU12: Ver celulares de una marca</h3>
            <p>Detalla: Mariana Ruiz</p>
            <p>Revisa: David Burgos</p>
        </>
    )
}

