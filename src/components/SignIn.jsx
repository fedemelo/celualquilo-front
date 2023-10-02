import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
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

    const intl = useIntl();

    const EmailInputFiller = intl.formatMessage({ id: 'EmailInputFiller' });
    const Password = intl.formatMessage({ id: 'Password' });
    const LogIn_Wellcome = intl.formatMessage({ id: 'LogIn_Wellcome' });
    const LogIn_WellcomeSubtext = intl.formatMessage({ id: 'LogIn_WellcomeSubtext' });
    const LogIn_RememberMeCheckbox = intl.formatMessage({ id: 'LogIn_RememberMeCheckbox' });
    const LogIn_ForgotPassword = intl.formatMessage({ id: 'LogIn_ForgotPassword' });
    const LogIn_LogInButtonText = intl.formatMessage({ id: 'LogIn_LogInButtonText' });
    const LogIn_NewUsserText = intl.formatMessage({ id: 'LogIn_NewUsserText' });
    const LogIn_CreateAccHiperlink = intl.formatMessage({ id: 'LogIn_CreateAccHiperlink' });


    const [formValues, setFormValues] = useState({ name: "", email: "", password: "", showPassword: false })
    const [clickedField, setClickedField] = useState({ name: false, email: false, password: false })

    const togglePasswordVisibility = () => {
        setFormValues({ ...formValues, showPassword: !formValues.showPassword });
    };

    const getProblemInEmail = () => {

        const email = formValues.email ? formValues.email.trim() : ""

        if (!clickedField.email) return "";

        if (email === "") return intl.formatMessage({ id: "EmailNotEmpty" });

        if (!email.includes("@")) return intl.formatMessage({ id: "EmailContainsAtSymbol" });

        if (!email.includes(".")) return intl.formatMessage({ id: "EmailContainsDot" });

        if (email.startsWith("@") || email.endsWith("@")) return intl.formatMessage({ id: "AtSymbolNotAtBeginningOrEnd" });

        if (email.startsWith(".") || email.endsWith(".")) return intl.formatMessage({ id: "DotNotAtBeginningOrEnd" });

        if (email.includes("@@")) return intl.formatMessage({ id: "NoConsecutiveAtSymbols" });

        return "";
    };

    const getProblemInPassword = () => {

        const password = formValues.password ? formValues.password.trim() : ""

        if (!clickedField.password) return "";

        if (password === "") return intl.formatMessage({ id: "PasswordNotEmpty" });

        if (!/[0-9]/.test(password)) return intl.formatMessage({ id: "PasswordContainsNumber" });

        if (!/[a-z]/.test(password)) return intl.formatMessage({ id: "PasswordContainsLowercase" });

        if (!/[A-Z]/.test(password)) return intl.formatMessage({ id: "PasswordContainsUppercase" });

        if (!/[^a-zA-Z0-9]/.test(password)) return intl.formatMessage({ id: "PasswordContainsSpecialChar" });

        if (password.length < 9) return intl.formatMessage({ id: "PasswordMinLength" });

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
                                {LogIn_Wellcome}
                            </Typography>
                            <Typography component="h1" variant="h5" sx={subTitleStyle}>
                                {LogIn_WellcomeSubtext}
                            </Typography>
                        </div>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ zIndex: 0, alignItems: 'left', justifyContent: 'left', textAlign: 'left' }}>

                            <TextField
                                margin="normal"
                                variant="filled"
                                required
                                color={getProblemInEmail() === "" ? "success" : "error"}
                                fullWidth
                                id="email"
                                label={EmailInputFiller}
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
                                color={getProblemInPassword() === "" ? "success" : "error"}
                                name="password"
                                label={Password}
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
                                        label={LogIn_RememberMeCheckbox}
                                    />
                                </Grid>
                                <Grid item sx={{ textAlign: 'right' }}>
                                    <Link href="#" variant="body2">
                                        {LogIn_ForgotPassword}
                                    </Link>
                                </Grid>
                            </Grid>

                            <Link href="/user" >
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: '#9E30FF', color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 'bold' }}
                                >
                                    {LogIn_LogInButtonText}
                                </Button>
                            </Link>
                            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item>
                                    {LogIn_NewUsserText}
                                </Grid>
                                <Grid item>
                                    <Link href="/Register" variant="body2">
                                        {LogIn_CreateAccHiperlink}
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