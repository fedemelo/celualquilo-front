import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import logoCeluAlquilo from "./../assets/logoCeluAlquilo.png";

export default function Banner() {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={logoCeluAlquilo} alt="Logo de celuAlquilo" />
          <p> Hola </p>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
