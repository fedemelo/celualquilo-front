import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GoBack from './components/GoBack';
import Review from './components/Review';
import Breadcrumb from './components/BreadCrumb';
import RentHistory from './components/RentHistory';
import ProductsGrid from './components/productsExposed';
import Favourites from './components/Favourites';
import ProductsGridFilter from './components/ProductsGridFilter';
import ProductsGridPrice from './components/ProductGridPrice';
import MainPage from './components/MainPage';
import './styles/App.css';
import UserProfile from './components/UserProfile';

import SignInSide from './components/SignIn';
import CreateAccountSide from './components/CreateAccount';
import PhoneDetail from './components/PhoneDetail';
import RentDetail from './components/RentDetail';
import Billing from './components/Billing';



export default function App() {
    return (
        <div className="App">
            <Header />

            {/* Especificar en este punto la historia de usuario que se desea visualizar */}
            {/* <MainPage />  */}
            {/* <HU1 /> */}
            {/* <HU2 /> */}
            {/* <HU3 /> */}
            {/* <HU4 /> */}
            {/* <HU5/> */}
            {/* <HU6 /> */}
            {/* <HU7 /> */}
            <HU8 />
            {/* <HU9 /> */}
            {/* <HU10 /> */}
            {/* <HU11 /> */}
            {/* <HU12 /> */}
            <HU13 />
            <Footer />
        </div>
    );
}


const HU1 = () => {
    return (
        <>
            <CreateAccountSide />
        </>
    )
}


const HU2 = () => <SignInSide />


const HU3 = () => <ProductsGrid />


const HU4 = () => {
    return (
        <>
            <GoBack text="Detalle de un celular" />
            <PhoneDetail />
        </>
    )
}


const HU5 = () => {
    return (
        <>
            <RentDetail />
        </>
    )
}


const HU6 = () => {
    const breadcrumbs = [
        { href: '', text: 'Detalles de Alquiler' },
        { href: '', text: 'Dirección y Facturación' },
    ];

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <Billing />
        </>
    );
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
            <ProductsGridPrice />
        </>
    )
}


const HU12 = () => {
    return (
        <>
            <ProductsGridFilter brand={"iPhone"} />
        </>
    )
}

const HU13 = () => {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
      };
    return (
          
          <UserProfile user={user} />
    )
}