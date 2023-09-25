import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import signinimg from '../assets/imgLogin.png';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


export default function SignInSide() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    const [formValues, setFormValues] = useState({name: "", email: "", password: "", showPassword: false})
    const [clickedField, setClickedField] = useState({name: false, email: false, password: false})

    const handleSignIn = () => {
        // Add your sign-in logic here
        console.log('Email:', formValues.email);
        console.log('Password:', formValues.password);
        // You can replace the console.log with your authentication logic
    };

    const togglePasswordVisibility = () => {
        setFormValues({ ...formValues, showPassword: !formValues.showPassword });
    };


    const getProblemInEmail = () => {

        const email = formValues.email? formValues.email.trim() : ""

        if (!clickedField.email) return "";

        if (email === "") return "El correo no puede estar vacío.";

        if (!email.includes("@")) return "El correo debe contener el símbolo '@'.";

        if (!email.includes(".")) return "El correo debe contener un punto '.'.";

        if (email.startsWith("@") || email.endsWith("@")) return "El símbolo '@' no puede estar al principio ni al final del correo.";

        if (email.startsWith(".") || email.endsWith(".")) return "El punto '.' no puede estar al principio ni al final del correo.";

        if (email.includes("@@")) return "No puede haber dos símbolos '@' consecutivos en el correo.";

        return "";
    };

    const getProblemInPassword = () => {

        const password = formValues.password? formValues.password.trim() : ""

        if (!clickedField.password) return "";

        if (password === "") return "La contraseña no puede estar vacía";

        return "";
    }


    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: '#E6CAFF',
            paddingBlock: '5vw',
        }}
        >
            <Grid container component="main" sx={{ height: '100vh', marginTop: '10vw', justifyContent: 'center' }}>
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
                        backgroundImage: `url(${signinimg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundSize: '95%',
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
                                Bienvenido de Vuelta
                            </Typography>
                            <Typography component="h1" variant="h5" sx={subTitleStyle}>
                                Alquila un celular fácil con CeluAlquilo
                            </Typography>
                        </div>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ zIndex: 0, alignItems: 'left', justifyContent: 'left', textAlign: 'left' }}>

                            <TextField
                                margin="normal"
                                variant="filled"
                                required
                                color = {getProblemInEmail() === "" ? "success" : "error"}
                                fullWidth
                                id="email"
                                label="Escriba su correo electrónico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                                onClick={() => setClickedField({ ...clickedField, email: true })}
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                            />
                            <Typography variant='body1' color={"red"}>{getProblemInEmail()}</Typography>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                color = {getProblemInPassword() === "" ? "success" : "error"}
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
                                type={formValues.showPassword ? 'text' : 'password'}
                                value={formValues.password}
                                onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                                onClick={() => setClickedField({ ...clickedField, password: true })}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={togglePasswordVisibility}
                                                tabIndex={-1} // Para evitar que el botón sea enfocable
                                            >
                                                {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Typography variant='body1' color={"red"}>{getProblemInPassword()}</Typography>
                            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Recordarme"
                                    />
                                </Grid>
                                <Grid item sx={{ textAlign: 'right' }}>
                                    <Link href="#" variant="body2">
                                        Olvidaste tu contraseña?
                                    </Link>
                                </Grid>
                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2, backgroundColor: '#9E30FF', color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 'bold' }}
                            >
                                Sign In
                            </Button>
                            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item>
                                    {"Nuevo Usuario?"}
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Crear una cuenta"}
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