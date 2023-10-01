import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import createAccimg from '../assets/imgcreateAcc.png';
import { useState } from 'react';



export default function CreateAccountSide() {

    const intl = useIntl();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const [formValues, setFormValues] = useState({ name: "", email: "", password: "", verifiyPassword: "", showPassword: false, showVerifyPassword: false })
    const [clickedField, setClickedField] = useState({ name: false, email: false, password: false, verifiyPassword: false })


    const togglePasswordVisibility = () => {
        setFormValues({ ...formValues, showPassword: !formValues.showPassword });
    };

    const toggleVerifyPasswordVisibility = () => {
        setFormValues({ ...formValues, showVerifyPassword: !formValues.showVerifyPassword });
    };

    const getProblemInName = () => {

        const name = formValues.name ? formValues.name.trim() : ""

        if (!clickedField.name) return "";

        if (name === "") return intl.formatMessage({ id: "No_Empty_Name" })

        if (name.length < 2) return "El nombre debe contener al menos dos letras.";

        return "";
    };

    const getProblemInEmail = () => {

        const email = formValues.email ? formValues.email.trim() : ""

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

        const password = formValues.password ? formValues.password.trim() : ""

        if (!clickedField.password) return "";

        if (password === "") return "La contraseña no puede estar vacía";

        if (!/[0-9]/.test(password)) return "La contraseña debe contener al menos un número.";

        if (!/[a-z]/.test(password)) return "La contraseña debe contener al menos una letra minúscula.";

        if (!/[A-Z]/.test(password)) return "La contraseña debe contener al menos una letra mayúscula.";

        if (!/[^a-zA-Z0-9]/.test(password)) return "La contraseña debe contener al menos un carácter especial.";

        if (password.length < 9) return "La contraseña debe tener al menos 9 caracteres.";

        return "";
    }


    const getProblemInVerifyPassword = () => {

        const password = formValues.password ? formValues.password.trim() : ""

        if (!clickedField.verifyPassword) return "";

        const verifyPassword = formValues.verifyPassword ? formValues.verifyPassword.trim() : ""

        if (verifyPassword === "") return "Escriba de nuevo la contraseña";

        if (password !== verifyPassword) return "Las contraseñas no coinciden";

        return "";

    }


    return (
        <Box sx={{
            display: 'flex',
            backgroundColor: '#E6CAFF',
            paddingBlock: '5vw',
        }}
        >
            <Grid container={true} component="main"
                sx={{
                    height: '100vh',
                    marginTop: '7vw',
                    justifyContent: 'center',
                    marginBottom: '20vw',  // Para que no se pegue al footer
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
                                color={getProblemInName() === "" ? "success" : "error"}
                                required
                                fullWidth
                                id="name"
                                label="Escriba nombre y apellido"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
                                onClick={() => setClickedField({ ...clickedField, name: true })}
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                            />
                            <Typography variant='body1' color={"red"}>{getProblemInName()}</Typography>
                            <TextField
                                margin="normal"
                                variant="filled"
                                color={getProblemInEmail() === "" ? "success" : "error"}
                                required
                                fullWidth
                                id="email"
                                label="Escriba su correo"
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
                                color={getProblemInPassword() === "" ? "success" : "error"}
                                fullWidth
                                name="password"
                                label="Contraseña"
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
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                color={getProblemInVerifyPassword() === "" ? "success" : "error"}
                                label="Confirmar contraseña"
                                variant="filled"
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        background: "rgb(255, 255, 255)"
                                    }
                                }}
                                type={formValues.showVerifyPassword ? 'text' : 'password'}
                                value={formValues.verifyPassword}
                                onChange={(e) => setFormValues({ ...formValues, verifyPassword: e.target.value })}
                                onClick={() => setClickedField({ ...clickedField, verifyPassword: true })}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                edge="end"
                                                onClick={toggleVerifyPasswordVisibility}
                                                tabIndex={-1} // Para evitar que el botón sea enfocable
                                            >
                                                {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Typography variant='body1' color={"red"}>{getProblemInVerifyPassword()}</Typography>
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
                            <Link href="/user">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: '#9E30FF', color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 'bold' }}
                                >
                                    Crear cuenta
                                </Button>
                            </Link>
                            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item>
                                    {"Ya estás registrado?"}
                                </Grid>
                                <Grid item>
                                    <Link href="/Login" variant="body2">
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