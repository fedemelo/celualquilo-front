import React from 'react';
import RentButton from './components/RentButton';
import SearchBar from './components/SearchBar';
import Header from './components/Header';


function App() {
    return (
        <div className="App">
            <Header />
            <RentButton text="Alquilar" />
        </div>
    );
}

export default App;
