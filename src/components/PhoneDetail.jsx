import * as React from 'react';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import FormLabel from '@mui/material/FormLabel';
import { COLORS } from '../styles/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GoBack from './GoBack';



const exampleBrand = "Marca: Apple"
const exampleAvailability = "Disponibilidad: 10 en Stock"

const exampleName = "iPhone 14 Pro"

const exampleSpecs = [
    "Brillo máximo de 800 nits (normal); brillo máximo de 1.200 nits (HDR)",
    "Resistencia a las salpicaduras, el agua y el polvo IP68 (hasta 6 metros de profundidad durante un máximo de 30 minutos, según la norma IEC 60529)",
    "Chip A14 Bionic; Neural Engine de última generación",
]

const exampleReviews = [
    {
        titulo: "Una experiencia móvil sin preocupaciones con CeluAlquilo.com",
        contenido: "Mi experiencia con CeluAlquilo.com fue impecable. La plataforma ofreció una amplia selección de teléfonos de calidad, una entrega rápida y un proceso de devolución sencillo. El teléfono funcionó de manera excelente durante mi alquiler. Recomiendo CeluAlquilo.com para soluciones de telefonía temporal.",
        rating: 4.5
    },
    {
        titulo: "Gran servicio de alquiler de teléfonos",
        contenido: "Utilicé CeluAlquilo.com para alquilar un teléfono durante mis vacaciones y quedé muy satisfecho. El proceso de pedido fue fácil, el teléfono llegó a tiempo y funcionó a la perfección. Sin duda, volveré a utilizar este servicio en el futuro.",
        rating: 4.0
    },
    {
        titulo: "La solución perfecta para viajes de negocios",
        contenido: "Como viajero de negocios frecuente, he utilizado CeluAlquilo.com en varias ocasiones. Cada vez, la experiencia ha sido excelente. Los teléfonos siempre están en excelente estado, y la entrega y devolución son muy convenientes.",
        rating: 4.2
    },
    {
        titulo: "Rápido y confiable",
        contenido: "Necesitaba un teléfono de repuesto temporalmente y CeluAlquilo.com fue la elección perfecta. El proceso de alquiler fue rápido y sin complicaciones, y el teléfono funcionó sin problemas durante todo el período de alquiler.",
        rating: 4.8
    },
    {
        titulo: "Excelente servicio al cliente",
        contenido: "Tuve algunas preguntas sobre el proceso de alquiler y el equipo de CeluAlquilo.com fue muy servicial y amable. Me proporcionaron toda la información que necesitaba de manera clara y rápida. Un servicio al cliente excepcional.",
        rating: 4.5
    },
    {
        titulo: "Gran variedad de modelos",
        contenido: "Me impresionó la amplia selección de modelos disponibles en CeluAlquilo.com. Pude elegir un teléfono que se adaptara a mis necesidades y presupuesto. La calidad de los dispositivos es notable.",
        rating: 4.3
    },
    {
        titulo: "Perfecto para viajes internacionales",
        contenido: "Alquilé un teléfono de CeluAlquilo.com para un viaje internacional y fue una elección inteligente. Pude usarlo sin problemas en el extranjero y evitar costosos cargos de roaming. Muy recomendado.",
        rating: 4.6
    },
    {
        titulo: "Proceso de alquiler sencillo",
        contenido: "El proceso de alquiler en CeluAlquilo.com es muy fácil de seguir. Solo tomó unos minutos completar mi pedido y elegir las opciones que necesitaba. La conveniencia es inigualable.",
        rating: 4.1
    },
    {
        titulo: "Sin compromisos",
        contenido: "Siempre dudaba en comprar un teléfono para necesidades temporales. Con CeluAlquilo.com, no tengo que hacerlo. Puedo obtener un teléfono de calidad cuando lo necesito y devolverlo cuando ya no lo necesito.",
        rating: 4.4
    },
    {
        titulo: "Una solución inteligente",
        contenido: "CeluAlquilo.com ha sido una solución inteligente para mis necesidades de telefonía temporal. Ofrecen un servicio confiable y conveniente que recomiendo a cualquiera que busque un teléfono de alquiler.",
        rating: 4.7
    }
];


const moneda = "COP"
const examplePrice = "$10.000 " + moneda + "/día"


export default function Review() {
    const theme = useTheme();
    const oss = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Stack marginBottom={7}>
            <GoBack text="Detalle de un celular" />
            <Card sx={cardStyle}>
                <Grid container spacing={0} padding={3} direction={'row'} alignItems={'center'}>
                    {/* Column for Image */}
                    {!oss && <Grid item xs={12} sm={5}>
                        <img
                            style={{ maxWidth: '130%', height: '30vw' }}
                            alt={exampleName}
                            src={examplePhone}
                        />
                        <Typography variant="h4" component="div" padding={1}>
                            {examplePrice}
                        </Typography>
                    </Grid>}

                    <Grid item xs={12} sm={7} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" color="text.primary" padding={1}>
                            {exampleBrand}
                        </Typography>
                        <Typography variant="h6" color="text.primary" padding={1}>
                            {exampleAvailability}
                        </Typography>
                        <Typography variant="h3" component="div" padding={1}>
                            {exampleName}
                        </Typography>
                        {oss && <Grid item xs={12} sm={5}>
                        <img
                            style={{ maxWidth: '130%', height: '60vw' }}
                            alt={exampleName}
                            src={examplePhone}
                        />
                        <Typography variant="h4" component="div" padding={1}>
                            {examplePrice}
                        </Typography>
                        </Grid>}
                        <Rating name="read-only" value={5} readOnly size="large" />
                        <SpecList specs={exampleSpecs} />
                        
                        <RentButton text="Alquilar" />
                    </Grid>
                </Grid>

                <CardContent>
                    <CommentArea />
                </CardContent>

            </Card>
        </Stack>
    );
}


const cardStyle = {
    width: "80vw",
    // centered
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    alignSelf: "center",
}


const SpecList = ({ specs }) => {
    return (
        <List>
            {specs.map((spec, index) => (
                <ListItem key={index} sx={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
                    <ListItemIcon>
                        <CheckIcon />
                    </ListItemIcon>
                    <Typography variant="h6" color="text.secondary">
                        {spec}
                    </Typography>
                </ListItem>
            ))}
        </List>
    );
}

const RentButton = ({ text }) =>
    <Button
        style={{
            borderRadius: 20,
            padding: "5px 20px",
            backgroundColor: COLORS.primary,
            fontSize: "25px",
            textTransform: "none",
        }}
        variant="contained"
    >{text}</Button>;


const CommentArea = () => <Stack spacing={1.3}>
    
    <FormLabel
        sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: '2rem',
            lineHeight: '22px',
            color: '#202020',
            textAlign: 'left',
            padding: 2
        }}
    >Reseñas de otros usuarios</FormLabel>
    <UserReviews reviews={exampleReviews} />
</Stack>


const UserReviews = ({ reviews }) =>
    <Stack spacing={3}>
        {reviews.map((review, index) => (
            <Card key={index} sx={{ textAlign: 'left'}}>
                <CardContent>
                    <Typography variant="h6" color="text.primary">
                        {review.titulo}
                    </Typography>

                    <hr style={{
                        color: 'darkgray',
                        height: .1,
                    }} />


                    <Typography variant="body2" color="text.primary">
                        {review.contenido}
                    </Typography>

                    {/* <hr style={{
                        color: 'darkgray',
                        height: .1,
                    }} /> */}

                    <Rating name="read-only" value={review.rating} readOnly size="large"/>
                </CardContent>
            </Card>
        ))}
    </Stack>

