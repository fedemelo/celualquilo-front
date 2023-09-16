import { Box } from "@mui/material";
import "./../css/Footer.css";


export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        p: 1.75,
        mt: 1.75,
        lineHeight: "1.2285em",
      }}
    >
      <Box
        sx={{
          mx: "1em",
          fontFamily: "Lato,'Helvetica Neue',Arial,Helvetica,sans-serif",
          fontSize: "14px",
        }}
      >
        <Box sx={{ textAlign: "center", mt: 1.75 }}>
          <div id="websis-icon" className="social-icons">
            <ul className="websis SENECODE">
              <li className="social-Cupi2">
                <a
                  href="http://cupi2.uniandes.edu.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Econtinuada">
                <a
                  href="https://educacioncontinuada.uniandes.edu.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Labs">
                <a
                  href="https://laboratorios.virtual.uniandes.edu.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Mujeres">
                <a
                  href="https://sistemas.uniandes.edu.co/mujeresencomputacion"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Rincon">
                <a
                  href="https://sistemas.uniandes.edu.co/es/isis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-sisinfo">
                <a
                  href="http://sisinfo.uniandes.edu.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Publica">
                <a
                  href="https://sistemas.uniandes.edu.co/es/investigacion/publicaciones-proyectos/publicaciones"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Conflicto">
                <a
                  href="https://sch.uniandes.edu.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
              <li className="social-Forosisis">
                <a
                  href="https://sistemas.uniandes.edu.co/es/foros-isis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DIOA
                </a>
              </li>
            </ul>
          </div>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            "& a": {
              color: "primary.main",
              textDecoration: "none",
            },
            m: 1.75,
          }}
        >
          <a href="https://apoyofinanciero.uniandes.edu.co/">
            Apoyo Financiero
          </a>{" "}
          | <a href="http://registro.uniandes.edu.co/">Admisiones y Registro</a>{" "}
          | <a href="http://biblioteca.uniandes.edu.co/">Biblioteca</a> |{" "}
          <a href="https://bloqueneon.uniandes.edu.co/">Bloque Neón</a> |{" "}
          <a href="http://agenda.uniandes.edu.co/">Agenda y Eventos</a> |{" "}
          <a href="http://decanaturadeestudiantes.uniandes.edu.co/">
            Decanatura de Estudiantes
          </a>
          <Box>
            Universidad de los Andes | Vigilada Mineducación
            <br />
            Reconocimiento como Universidad: Decreto 1297 del 30 de mayo de
            1964.
            <br />
            Reconocimiento personería jurídica: Resolución 28 del 23 de febrero
            de 1949 Minjusticia
            <br />
            Edificio Mario Laserna Cra 1Este No 19A - 40 Bogotá (Colombia) |
            Tel: [571] 3394949 Ext: 2860, 2861, 2862 | Fax: [571] 3324325
            <br />© 2022 -{" "}
            <a href="https://sistemas.uniandes.edu.co/">
              Departamento de Ingeniería de Sistemas y Computación
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
