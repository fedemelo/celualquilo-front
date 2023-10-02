import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
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
    const Register_CreateAcc = intl.formatMessage({ id: 'Register_CreateAcc' });
    const Register_CreateSubtext = intl.formatMessage({ id: 'Register_CreateSubtext' });
    const Register_NameInputFiller = intl.formatMessage({ id: 'Register_NameInputFiller' });
    const Register_RegisterTerms = intl.formatMessage({ id: 'Register_RegisterTerms' });
    const Register_CreateAccButton = intl.formatMessage({ id: 'Register_CreateAccButton' });
    const Register_LogInQuestionText = intl.formatMessage({ id: 'Register_LogInQuestionText' });
    const Register_LogInHiperlink = intl.formatMessage({ id: 'Register_LogInHiperlink' });
    const EmailInputFiller = intl.formatMessage({ id: 'EmailInputFiller' });
    const Password = intl.formatMessage({ id: 'Password' });
    const ConfirmPassword = intl.formatMessage({ id: 'ConfirmPassword' });


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

        if (name.length < 2) return intl.formatMessage({ id: "NameTooShort" });

        return "";
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


    const getProblemInVerifyPassword = () => {

        const password = formValues.password ? formValues.password.trim() : ""

        if (!clickedField.verifyPassword) return "";

        const verifyPassword = formValues.verifyPassword ? formValues.verifyPassword.trim() : ""

        if (verifyPassword === "") return intl.formatMessage({ id: "RewritePassword" });

        if (password !== verifyPassword) return intl.formatMessage({ id: "PasswordsDoNotMatch" });

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
                                {Register_CreateAcc}
                            </Typography>
                            <Typography component="h1" variant="h5" sx={subTitleStyle}>
                                {Register_CreateSubtext}
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
                                label={Register_NameInputFiller}
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
                                color={getProblemInPassword() === "" ? "success" : "error"}
                                fullWidth
                                name="password"
                                label={Password}
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
                                label={ConfirmPassword}
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
                                    {Register_RegisterTerms}
                                </Typography>

                            </Grid>
                            <Link href="/user">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: '#9E30FF', color: '#FFFFFF', fontFamily: 'Open Sans', fontWeight: 'bold' }}
                                >
                                    {Register_CreateAccButton}
                                </Button>
                            </Link>
                            <Grid container sx={{ justifyContent: 'space-around', alignItems: 'center' }}>
                                <Grid item>
                                    {Register_LogInQuestionText}
                                </Grid>
                                <Grid item>
                                    <Link href="/Login" variant="body2">
                                        {Register_LogInHiperlink}
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