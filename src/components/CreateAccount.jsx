import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import createAccimg from '../assets/imgcreateAcc.png';


export default function CreateAccountSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSignIn = () => {
        // Add your sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
        // You can replace the console.log with your authentication logic
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: '#E6CAFF',
        }}
        >
            <Grid container component="main"
                sx={{
                    height: '100vh',
                    marginTop: '10vw',
                    justifyContent: 'center',
                    marginBottom: '5vw',
                }}>
                <style>

                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
                </style>
                <CssBaseline />
                <Grid
                    item
                    sm={4}
                    md={6}
                    sx={{
                        zIndex: 0.7,
                        backgroundImage: `url(${createAccimg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fullWidth: 'true',
                        backgroundSize: '80%',
                        verticalAlign: 'middle',

                    }}
                />
                <Grid item xs={12} sm={8} md={5} >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'left',
                            marginTop: '10vw',
                            marginLeft: '5vw',
                            height: '100%',
                        }}
                    >
                        <div style={hacialaIzq}>
                            <Typography component="h1" variant="h4" sx={titleStyle}>
                                Crear una Cuenta
                            </Typography>
                            <Typography component="h1" variant="h5" sx={subTitleStyle}>
                                Por favor rellene el formulario
                            </Typography>
                        </div>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ zIndex: 0, alignItems: 'left', justifyContent: 'left', textAlign: 'left' }}>

                            <TextField
                                margin="normal"
                                variant="filled"
                                required
                                fullWidth
                                id="email"
                                label="Escriba nombre y apellido"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                            />
                            <TextField
                                margin="normal"
                                variant="filled"
                                required
                                fullWidth
                                id="email"
                                label="Escriba su correo"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                id="password"
                                autoComplete="current-password"
                                variant="filled"
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={togglePasswordVisibility}
                                                tabIndex="-1" // Para evitar que el botón sea enfocable
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Confirmar contraseña"
                                id="password"
                                autoComplete="current-password"
                                variant="filled"
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={togglePasswordVisibility}
                                                tabIndex="-1" // Para evitar que el botón sea enfocable
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="body2">
                                    Registrándome estoy de acuerdo con los{' '}
                                    <Link href="#" color="primary">
                                        términos y condiciones
                                    </Link>{' '}
                                    y nuestras{' '}
                                    <Link href="#" color="primary">
                                        políticas de privacidad
                                    </Link>
                                </Typography>

                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#9E30FF', color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 'bold' }}
                            >
                                Crear cuenta
                            </Button>
                            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item>
                                    {"Ya estás registrado?"}
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Ingresa aquí"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );

}
const titleStyle = {
    color: '#280C40',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: '1vw',
    fontSize: '32px',
};

const subTitleStyle = {
    color: '#280C40',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    marginBottom: '1vw',
    fontSize: '20px',
};

const hacialaIzq = {
    justifyContent: 'left',
    alignItems: 'left',
    fullWidth: 'true',
    textAlign: 'left',
};