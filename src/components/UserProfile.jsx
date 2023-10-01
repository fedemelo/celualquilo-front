import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Nav } from 'react-bootstrap';

export default function UserProfile({ name, email }) {

    const handleActiveReservationsClick = () => {
        // Lógica para mostrar las reservas activas del usuario
        console.log('Ver reservas activas');
    };

    const handlePastReservationsClick = () => {
        // Lógica para mostrar las reservas pasadas del usuario
        console.log('Ver reservas pasadas');
    };

    return (
        //box Element MUI
        <Box
            sx={{
                paddingBottom: '6rem',
                width: '100%',
                justifyContent: 'center',
            }}
        >
            <Card sx={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar
                        src="/path-to-avatar-image.jpg"
                        alt="User Avatar"
                        sx={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            bottom: '2rem',
                            marginTop: '2rem',
                        }}
                    />
                    <Typography variant="h4" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Correo: {email}
                    </Typography>
                    <Nav.Link style={{ textDecoration: 'none' }} href="/RentHistory">
                        <Button
                            variant="contained"
                            onClick={handleActiveReservationsClick}
                            sx={buttonStyle}
                            color="secondary"
                        >
                            Ver historial
                        </Button>
                    </Nav.Link>
                    <Nav.Link style={{ textDecoration: 'none' }} href="/Favourites">
                        <Button
                            variant="contained"
                            onClick={handlePastReservationsClick}
                            sx={buttonStyle}
                            color="secondary"
                        >
                            Ver favoritos
                        </Button>
                    </Nav.Link>


                </CardContent>
            </Card>
        </Box>
    );
};


const buttonStyle = {
    borderRadius: '13px',
    marginTop: '2rem',
    textTransform: 'none',
    width: '15rem',
    backgroundColor: "#7724BF"
}
