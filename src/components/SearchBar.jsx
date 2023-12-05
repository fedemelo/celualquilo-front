import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ text }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = () => {
        window.location.href = `/products?search=${searchTerm}`
        localStorage.setItem("query", searchTerm)
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                width: '80%',
            }}
        >
            <TextField
                type="search"
                placeholder={text + '...'}
                size="small"
                sx={{
                    width: '100%',
                    color: '#495057',
                }}
                value={searchTerm}
                onChange={handleChange}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()} // Trigger submit on Enter key
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{ color: '#1B1D1F' }} />
                        </InputAdornment>
                    ),
                }}
            />
        </Container>
    );
};
