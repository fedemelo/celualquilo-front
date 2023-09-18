import React from 'react';
import RentButton from './components/RentButton';
import Header from './components/Header';
import Footer from './components/Footer';
import GoBack from './components/GoBack';
import Review from './components/Review';
import Breadcrumb from './components/BreadCrumb';
import RentHistory from './components/RentHistory';
import ProductsGrid from './components/productsExposed';
import Favourites from './components/Favourites';
import MainPage from './components/MainPage';
import './styles/App.css';


import SignInSide from './components/SignIn';

export default function App() {
    return (
        <div className="App">
            <Header />

            {/* Especificar en este punto la historia de usuario que se desea visualizar */}
            {/* <MainPage /> */}
            {/* <HU1 /> */}
            {/* <HU2 /> */}
            {/* <HU3 /> */}
            {/* <HU4 /> */}
            {/* <HU5 /> */}
            {/* <HU6 /> */}
            {/* <HU7 /> */}
            {/* <HU8 /> */}
            {/* <HU9 /> */}
            <HU10 />
            {/* <HU11 /> */}
            {/* <HU12 /> */}

            <Footer />
        </div>
    );
}


const HU1 = () => {
    return (
        <>
            <h3>HU1: Registrar un usuario</h3>
            <p>Detalla: Santiago Martínez</p>
        </>
    )
}


const HU2 = () => <SignInSide />


const HU3 = () => <ProductsGrid />


const HU4 = () => {
    return (
        <>
            <h3>HU4: Ver información del Teléfono</h3>
            <p>Detalla: Mariana Ruiz</p>
            <RentButton text="Alquilar" />
        </>
    )
}


const HU5 = () => {
    return (
        <>
            <h3>HU5: Alquilar Teléfono</h3>
            <p>Detalla: Mariana Ruiz</p>
        </>
    )
}


const HU6 = () => {
    return (
        <>
            <h3>HU6: Realizar pago en plataforma</h3>
            <p>Detalla: Santiago Martínez</p>
            <p>Revisa: Federico Melo </p>
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
            <p>Detalla: David Burgos </p>
        </>
    )
}


const HU12 = () => {
    return (
        <>
            <h3>HU12: Ver celulares de una marca</h3>
            <p>Detalla: David Burgos</p>
        </>
    )
}

