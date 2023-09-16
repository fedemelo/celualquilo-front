import React from 'react';
import PurpleButton from './components/PurpleButton';
import SearchBar from './components/SearchBar';


function App() {
    return (
        <div className="App">
            <SearchBar/>
            <PurpleButton text="Alquilar" />
        </div>
    );
}

export default App;
