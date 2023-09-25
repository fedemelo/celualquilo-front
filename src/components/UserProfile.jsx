import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Nav } from 'react-bootstrap';

const UserProfile = ({ name, email, reservations }) => {

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
          <Nav.Link href="/RentHistory">
            <Button
              variant="contained"
              color="primary"
              onClick={handleActiveReservationsClick}
              sx={buttonStyle1}
            >
              Ver historial
            </Button>
          </Nav.Link>
          <Nav.Link href="/Favourites">
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePastReservationsClick}
              sx={buttonStyle2}
            >
              Ver favoritos
            </Button>
          </Nav.Link>


        </CardContent>
      </Card>
    </Box>
  );
};

export default UserProfile;

const buttonStyle1 = {
  borderRadius: '13px',
  marginTop: '2rem',
  textTransform: 'none',
  width: '15rem',
  backgroundColor: "#7724BF"
}

const buttonStyle2 = {
  borderRadius: '13px',
  marginTop: '2rem',
  textTransform: 'none',
  width: '15rem',
  backgroundColor: "#7724BF"
}