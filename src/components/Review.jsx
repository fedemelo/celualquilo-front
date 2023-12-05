import React from 'react';
import { useIntl } from "react-intl";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RatingStars from './RatingStars';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import { COLORS } from '../styles/colors';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';
import examplePhone from '../assets/phones/iPhone14Pro.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import GoBack from './GoBack';
import { useParams } from 'react-router-dom';



const exampleBrand = "Apple"
const exampleAvailability = "10"

const exampleName = "iPhone 14 Pro"

const exampleSpecs = [
    "Brillo máximo de 800 nits (normal); brillo máximo de 1.200 nits (HDR)",
    "Resistencia a las salpicaduras, el agua y el polvo IP68 (hasta 6 metros de profundidad durante un máximo de 30 minutos, según la norma IEC 60529)",
    "Chip A14 Bionic; Neural Engine de última generación",
]



export default function Review() {
    const theme = useTheme();
    const oss = useMediaQuery(theme.breakpoints.down("sm"));

    const intl = useIntl();
    const title = intl.formatMessage({ id: 'Review_Title' });
    const stock = intl.formatMessage({ id: 'PhoneDetail_LablelStock' });

    const [Revrating, setRating] = React.useState(4.5);
    const [Revtext, setText] = React.useState("");
    const params = useParams();
    const idCel = params.productId;

    async function postReview() {
        const response = await fetch(`http://localhost:3000/api/v1/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),

            },
            body: JSON.stringify({
                rating: Revrating,
                text: Revtext,
            }),
        });
        const data = await response.json();
        const idReview = await data.id;

        await fetch(`http://localhost:3000/api/v1/phones/${idCel}/reviews/${idReview}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token"),
    },});
        
    }

    return (
        <>
            <GoBack text={title} route={`/RentHistory`} />
            <Stack marginBottom={7}>
                <Card sx={cardStyle}>
                    <Grid container spacing={0} padding={3} direction={'row'} alignItems={'center'}>
                        {/* Column for Image */}
                        {!oss && <Grid item xs={12} sm={6} >
                            <img
                                style={{ maxWidth: '130%', height: '30vw' }}
                                alt={exampleName}
                                src={examplePhone}
                            />
                        </Grid>}

                        <Grid item xs={12} sm={6} sx={{ textAlign: 'left' }}>
                            <Typography variant="h6" color="text.primary" padding={1}>
                                {exampleBrand}
                            </Typography>
                            <Typography variant="h6" color="text.primary" padding={1}>
                                {exampleAvailability} {stock}
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
                            </Grid>}
                            <SpecList specs={exampleSpecs} />
                        </Grid>

                    </Grid>

                    <CardContent>
                        <CommentArea setRating={setRating} setText={setText} postReview={postReview} />
                    </CardContent>
                </Card>
            </Stack>
        </>
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


const PublishReviewButton = ({ text, postReview }) => {
    return <Button
        style={{
            borderRadius: 20,
            padding: "5px 20px",
            backgroundColor: COLORS.primary,
            fontSize: "18px",
            textTransform: "none",
            color: "white",
        }}
        variant="contained"
        onClick={postReview}
    >{text}</Button>;
}


const CommentArea = ({ setRating, setText, postReview}) => {
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const intl = useIntl();

    const tellOp = intl.formatMessage({ id: 'Review_TellOpinion' });
    const btt = intl.formatMessage({ id: 'Review_publichBttn' });
    const inputFil = intl.formatMessage({ id: 'Review_InputFiller' });

    const handelText = (event) => {
        setText(event.target.value);
    }

    return (
        <FormControl>
            <Stack spacing={1.3}>
                <FormLabel
                    sx={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontSize: '24px',
                        lineHeight: '22px',
                        color: '#202020',
                    }}
                >{tellOp}</FormLabel>
                <RatingStars setRevrating={setRating}/>
                <Textarea
                    placeholder={inputFil}
                    onChange={handelText}
                    minRows={3}
                    endDecorator={
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 'var(--Textarea-paddingBlock)',
                                pt: 'var(--Textarea-paddingBlock)',
                                borderTop: '1px solid',
                                borderColor: 'divider',
                                flex: 'auto',
                                padding: '16px',
                            }}
                        >
                            <IconButton
                                variant="plain"
                                color="neutral"
                                onClick={(event) => setAnchorEl(event.currentTarget)}
                            >
                                <FormatBold />
                                <KeyboardArrowDown fontSize="md" />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                                size="sm"
                                placement="bottom-start"
                                sx={{ '--ListItemDecorator-size': '24px' }}
                            >
                                {['200', 'normal', 'bold'].map((weight) => (
                                    <MenuItem
                                        key={weight}
                                        selected={fontWeight === weight}
                                        onClick={() => {
                                            setFontWeight(weight);
                                            setAnchorEl(null);
                                        }}
                                        sx={{ fontWeight: weight }}
                                    >
                                        <ListItemDecorator>
                                            {fontWeight === weight && <Check fontSize="sm" />}
                                        </ListItemDecorator>
                                        {weight === '200' ? 'lighter' : weight}
                                    </MenuItem>
                                ))}
                            </Menu>
                            <PublishReviewButton text={btt} postReview={postReview} />
                        </Box>
                    }
                    sx={{
                        minWidth: 300,
                        fontWeight,
                    }}
                />
            </Stack>
        </FormControl>
    );
}
