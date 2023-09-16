import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import RatingStars from './RatingStars';
import { CardActionArea } from '@mui/material';
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
import examplePhone from '../assets/iPhone12Pro.jpg';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import CheckIcon from '@mui/icons-material/Check';

const exampleBrand = "Apple"
const exampleAvailability = "10 en Stock"

const exampleName = "iPhone 12 Pro"

const exampleSpec1 = "Brillo máximo de 800 nits (normal); brillo máximo de 1.200 nits (HDR)"
const exampleSpec2 = "Resistencia a las salpicaduras, el agua y el polvo IP68 (hasta 6 metros de profundidad durante un máximo de 30 minutos, según la norma IEC 60529)"
const exampleSpec3 = "Chip A14 Bionic; Neural Engine de última generación"



export default function Review() {
    return (
        <Card sx={{
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
        }}>
            <CardActionArea>
                <Grid container spacing={2} padding={7}>
                    {/* Column for Image */}
                    <Grid item xs={12} sm={4}>
                        <img
                            style={{ maxWidth: '100%', height: '20vw' }}
                            alt="iPhone 12 Pro"
                            src={examplePhone}
                        />
                    </Grid>

                    <Grid item xs={12} sm={8} sx={{ textAlign: 'left' }}>
                        <Typography variant="h6" color="text.secondary" padding={1}>
                            {exampleBrand}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" padding={1}>
                            {exampleAvailability}
                        </Typography>
                        <Typography variant="h3" component="div" padding={1}>
                            {exampleName}
                        </Typography>
                        <SpecList specs={[exampleSpec1, exampleSpec2, exampleSpec3]}/>
                    </Grid>

                </Grid>

                <CardContent>
                    <CommentArea />
                </CardContent>
            </CardActionArea>
        </Card>
    );
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
    

const PublishReviewButton = ({ text }) => {
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
    >{text}</Button>;
}


const CommentArea = () => {
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState(null);
    return (
        <FormControl>
            <FormLabel
                sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontSize: '24px',
                    lineHeight: '22px',
                    color: '#202020',
                }}
            >¡Dínos tu opinión!</FormLabel>
            <RatingStars />
            <Textarea
                paddingBlock="16px"
                paddingInline="16px"
                placeholder="Escribe tu reseña aquí..."
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
                        <PublishReviewButton text="Publicar Reseña" />
                    </Box>
                }
                sx={{
                    minWidth: 300,
                    fontWeight,
                }}
            />
        </FormControl>
    );
}