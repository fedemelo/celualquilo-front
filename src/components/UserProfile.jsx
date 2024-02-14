import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Nav } from 'react-bootstrap';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';

export default function UserProfile() {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const intl = useIntl();

    const ViewHistory = intl.formatMessage({ id: 'ViewHistory' });
    const ViewFavourites = intl.formatMessage({ id: 'ViewFavourites' });
    const LogOut = intl.formatMessage({ id: 'LogOut' });

    useEffect(() => {

        const getDatos = async () => {
            const usid = localStorage.getItem('accUserId');
            const response = await fetch(`http://localhost:3000/api/v1/users/${usid}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                }
            );
            const data = await response.json();
            setName(data.name);
            setEmail(data.email);
        };

        getDatos();

    }, []);

    const handleActiveReservationsClick = () => {
        // TODO: See active reservations
        console.log('Feature not implemented yet.');
    };

    const handlePastReservationsClick = () => {
        // TODO: See past reservations
        console.log('Feature not implemented yet.');
    };

    const logOut = () => {
        localStorage.clear();
        window.location.href = '/';
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
                            {ViewHistory}
                        </Button>
                    </Nav.Link>
                    <Nav.Link style={{ textDecoration: 'none' }} href="/Favourites">
                        <Button
                            variant="contained"
                            onClick={handlePastReservationsClick}
                            sx={buttonStyle}
                            color="secondary"
                        >
                            {ViewFavourites}
                        </Button>
                    </Nav.Link>
                    <Button
                            variant="contained"
                            onClick={logOut}
                            sx={buttonStyle}
                            color="secondary"
                        >
                            {LogOut}
                        </Button>
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
