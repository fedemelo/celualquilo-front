import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { FormattedMessage, useIntl } from 'react-intl';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';


function FilterSection({ filtros, setFiltros }) {
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const handleFiltrosClick = () => {
        setMostrarFiltros(!mostrarFiltros);
    };

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        if (name === 'PrecioMin') {
            setFiltros({ ...filtros, PrecioMin: value });
        } else if (name === 'PrecioMax') {
            setFiltros({ ...filtros, PrecioMax: value });
        } else {
            window.location.href=`/${name == 'apple'? 'iphone': name}`
        }

    };

    const intl = useIntl();

    const Minimum = intl.formatMessage({id: "Filters_Minimum"})
    const Maximum = intl.formatMessage({id: "Filters_Maximum"})

    return (
        <div data-testid="filter-section">
            <Box
                backgroundColor="lightgrey"
                p={0.1}
                textAlign="left"
                onClick={handleFiltrosClick}
                style={{ cursor: 'pointer' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                data-testid="filter-section-header"
            >
                <h3 data-testid="filter-section-title"> <FormattedMessage id='Filters_Title' />  </h3>
                {mostrarFiltros ? <ArrowDropUp data-testid="filter-section-arrow-up" /> : <ArrowDropDown data-testid="filter-section-arrow-down" />}
                
            </Box>
            {mostrarFiltros && (
                <Box
                    backgroundColor="lightgrey"
                    textAlign="center"
                    data-testid="filter-section-content"
                >

                    <Box
                        backgroundColor="lightgrey" 
                        p={2}
                        textAlign="center"
                        data-testid="filter-section-brand"
                    >
                        <h4> <FormattedMessage id='Filters_ByBrand' />  </h4>
                        <FormControlLabel
                            control={<Checkbox checked={filtros.Marcas.samsung} onChange={handleChange} name="samsung" data-testid="filter-section-brand-samsung" />}
                            label="Samsung"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={filtros.Marcas.apple} onChange={handleChange} name="apple" data-testid="filter-section-brand-apple" />}
                            label="Apple"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={filtros.Marcas.huawei} onChange={handleChange} name="huawei" data-testid="filter-section-brand-huawei" />}
                            label="Huawei"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={filtros.Marcas.xiaomi} onChange={handleChange} name="xiaomi" data-testid="filter-section-brand-xiaomi" />}
                            label="Xiaomi"
                        />
                    </Box>
                    <Box
                        backgroundColor="lightgrey"
                        p={2}
                        textAlign="center"
                        data-testid="filter-section-price"
                    >
                        <h4> <FormattedMessage id='Filters_ByPrice' /> </h4>
                        <TextField
                            label={Minimum}
                            type="number"
                            value={filtros.PrecioMin}
                            onChange={handleChange}
                            name="PrecioMin"
                            data-testid="filter-section-price-min"
                        />
                        <TextField
                            label={Maximum}
                            type="number"
                            value={filtros.PrecioMax}
                            onChange={handleChange}
                            name="PrecioMax"
                            data-testid="filter-section-price-max"
                        />
                    </Box>

                </Box>
            )}
            <br />
        </div>
    );
}

export default FilterSection;