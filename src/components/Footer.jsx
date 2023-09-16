import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { COLORS } from "../styles/colors";

const Title = function ({ title }) {
    return (
        <Typography variant="h6" gutterBottom sx={{
            color: "white",
        }}>
            {title}
        </Typography>
    )
}

const Item = function ({ text }) {
    return (
        <Typography variant="body2" sx={{
            color: "white",
            fontWeight: "lighter",
            paddingBottom: "15px",
        }}>
            {text}
        </Typography>
    )
}

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                marginTop: 7,
                backgroundColor: COLORS.dark,
                bottom: 0,
                width: '100%',
                zIndex: 1,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={3}>
                        <Title title="General" />
                        <Item text="Sobre nosotros" />
                        <Item text="Nuestro negocio" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Title title="Tienda virtual" />
                        <Item text="Información de entrega" />
                        <Item text="Retornos y garantía" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Title title="Legal" />
                        <Item text="Términos de uso" />
                        <Item text="Términos de alquiler" />
                        <Item text="Política de privacidad" />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Title title="Contáctanos" />
                        <Item text="Facebook" />
                        <Item text="Twitter" />
                        <Item text="Instagram" />
                        <Item text="Youtube" />
                    </Grid>
                </Grid>
                <Box sx={{
                    paddingBottom: "20px",
                }}>
                    <Typography variant="body2" align="center"
                    sx = {{
                        color: "white",
                    }}>
                        {"Copyright © "}
                        <Link href="https://celualquilo.com/">
                            CeluAlquilo
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}