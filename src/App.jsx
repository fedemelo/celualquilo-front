import React from 'react';
import RentButton from './components/RentButton';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function HU1() {
    return (
        <>
            <h3>HU1: Registrar un usuario</h3>
            <p>Detalla: David Burgos</p>
            <p>Revisa: Santiago Martínez</p>
        </>
    )
}
function HU2() {
    return (
        <>
            <h3>HU2: Iniciar Sesión</h3>
            <p>Detalla: Santiago Martínez</p>
            <p>Revisa: Federico Melo </p>
        </>
    )
}
function HU3() {
    return (
        <>
            <h3>HU3: Ver Teléfonos Disponibles</h3>
            <p>Detalla: Federico Melo </p>
            <p>Revisa: Mariana Ruiz</p>
            <RentButton text="Alquilar" />
        </>
    )
}
function HU4() {
    return (
        <>
            <h3>HU4: Ver información del Teléfono</h3>
            <p>Detalla: Mariana Ruiz</p>
            <p>Revisa: David Burgos</p>
            <RentButton text="Alquilar" />
        </>
    )
}
function HU5() {
    return (
        <>
            <h3>HU5: Alquilar Teléfono</h3>
            <p>Detalla: David Burgos</p>
            <p>Revisa: Santiago Martínez</p>
        </>
    )
}
function HU6() {
    return (
        <>
            <h3>HU6: Realizar pago en plataforma</h3>
            <p>Detalla: Santiago Martínez</p>
            <p>Revisa: Federico Melo </p>
        </>
    )
}
function HU7() {
    return (
        <>
            <h3>HU7: Comparar especificaciones de celulares</h3>
            <p>Detalla: Federico Melo </p>
            <p>Revisa: Mariana Ruiz</p>
        </>
    )
}
function HU8() {
    return (
        <>
            <h3>HU8: Dejar evaluaciones y reseñas</h3>
            <p>Detalla: Mariana Ruiz</p>
            <p>Revisa: David Burgos</p>
        </>
    )
}
function HU9() {
    return (
        <>
            <h3>HU9: Ver historial de celulares</h3>
            <p>Detalla: David Burgos</p>
            <p>Revisa: Santiago Martínez</p>
        </>
    )
}
function HU10() {
    return (
        <>
            <h3>HU10: Seleccionar celulares favoritos</h3>
            <p>Detalla: Santiago Martínez</p>
            <p>Revisa: Federico Melo </p>
        </>
    )
}
function HU11() {
    return (
        <>
            <h3>HU11: Filtrar celulares por precio</h3>
            <p>Detalla: Federico Melo </p>
            <p>Revisa: Mariana Ruiz</p>
        </>
    )
}
function HU12() {
    return (
        <>
            <h3>HU12: Ver celulares de una marca</h3>
            <p>Detalla: Mariana Ruiz</p>
            <p>Revisa: David Burgos</p>
        </>
    )
}

function HU13() {
    return (
        <>
            <h3>HU13: Entre más me la mama, más me crece</h3>
            <p>Detalla: </p>
            <p>Revisa: David Burgos</p>
            <RentButton text="Alquilar" />
        </>
    )
}


function App() {
    return (
        <div className="App">
            <Header />

            <HU1 />
            <HU2 />
            <HU3 />
            <HU4 />
            <HU5 />
            <HU6 />
            <HU7 />
            <HU8 />
            <HU9 />
            <HU10 />
            <HU11 />
            <HU12 />
            <HU13 />

            <Footer />
        </div>
    );
}

export default App;
