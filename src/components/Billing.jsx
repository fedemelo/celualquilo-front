import React, { useState, useEffect } from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { COLORS } from '../styles/colors';
import { TextField, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import PriceDetails from './PriceDetails';
import Box from '@mui/material/Box';
import { Link, useParams } from 'react-router-dom';
import Breadcrumb from './BreadCrumb';

export default function Billing() {
    const intl = useIntl();
    const params = useParams();
    const idCel = params.productId;
    const phone = localStorage.getItem("cel" + idCel);
    let phoneJson = JSON.parse(phone);

    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    if (phoneJson === null) {
        phoneJson = {
            id: 1,
            name: "Samsung Galaxy S21",
            brand: "Samsung",
            price_per_day: 10,
            availability: 10,
            image: "https://www.samsung.com/us/smartphones/galaxy-s21-5g/buy/galaxy-s21-5g-phantom-violet-128gb-unlocked-sm-g991uzvaxaa/",
            camera_specifications: "12MP Ultra Wide Camera, 12MP Wide-angle Camera, 64MP Telephoto Camera",
            memory_specs: "128GB, 256GB, 512GB",
            ram_specs: "8GB",
        }
    }
    let phonePrice = phoneJson.pricePerDay;

    let dias = localStorage.getItem("dias");
    if (dias === null) {
        dias = 10;
    }

    return (
        <>
            <Breadcrumb breadcrumbs={[
                { href: `/products/${1}`, text: intl.formatMessage({ id: "Rent" }) },
                { href: `/products/${1}/rent`, text: intl.formatMessage({ id: "BreadcrumbRentDetail" }) },
                { href: '', text: intl.formatMessage({ id: "BreadcrumbBilling" }) },
            ]} />
            <Grid container direction={'row'} spacing={2} marginBottom={8}>
                <Grid item xs={12} sm={6}>
                    <BillingAddress
                        direccion={intl.formatMessage({ id: "Billing_Address_AddressText" })}
                        ciudad={intl.formatMessage({ id: "Billing_Address_City" })}
                        numeroContacto={intl.formatMessage({ id: "Billing_Address_ContactNumber" })}
                        error1={intl.formatMessage({ id: "InsertAddress" })}
                        error2={intl.formatMessage({ id: "InsertCity" })}
                        noNumbers={intl.formatMessage({ id: "TheCityCannotContainNumbers" })}
                        moreThanOneLetter={intl.formatMessage({ id: "TheCityMustContainMoreThanOneLetter" })}
                        error3={intl.formatMessage({ id: "InsertContactNumber" })}
                        zeros={intl.formatMessage({ id: "zeros" })}
                        ones={intl.formatMessage({ id: "ones" })}
                        twos={intl.formatMessage({ id: "twos" })}
                        threes={intl.formatMessage({ id: "threes" })}
                        fours={intl.formatMessage({ id: "fours" })}
                        fives={intl.formatMessage({ id: "fives" })}
                        six={intl.formatMessage({ id: "sixes" })}
                        sevens={intl.formatMessage({ id: "sevens" })}
                        eights={intl.formatMessage({ id: "eights" })}
                        nines={intl.formatMessage({ id: "nines" })}
                        tenDigits={intl.formatMessage({ id: "TheContactNumberMustContain10Digits" })}
                        isDisabledFunction={setIsButtonDisabled}
                    />
                    <PayingMethod efectivo={intl.formatMessage({ id: "Billing_PayMethod_Cash" })} tarjeta={intl.formatMessage({ id: "Billing_PayMethod_Card" })} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PriceDetails dias={dias} price_per_day={phonePrice} />
                    {isButtonDisabled ? (
                        <RentButton text={intl.formatMessage({ id: "Billing_PriceInfo_Finish" })} isDisabled={true} />
                    ) : (
                        <Link to={"/RentHistory"}>
                            <RentButton text={intl.formatMessage({ id: "Billing_PriceInfo_Finish" })} />
                        </Link>)}
                </Grid>
            </Grid>
        </>
    );
}


const cardStyle = {
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
    padding: "30px",
}


const RentButton = ({ text, isDisabled }) => {

    return (
        <>
            < Button
                style={{
                    borderRadius: 20,
                    padding: "5px 20px",
                    backgroundColor: isDisabled ? '#CAB1E0' : COLORS.primary,
                    fontSize: "25px",
                    textTransform: "none",
                    width: "100%",
                }
                }

                variant="contained"
            > {text}</Button >
        </>
    )
}

const BillingAddress = ({ direccion, ciudad, numeroContacto, error1, error2, noNumbers, moreThanOneLetter, error3, zeros, ones, twos, threes, fours, fives, six, sevens, eights, nines, tenDigits, isDisabledFunction }) => {

    const [formValues, setFormValues] = useState({ address: "", city: "", number: "0" })
    const [clickedFields, setClickedFields] = useState({ address: false, city: false, number: false })

    useEffect(() => {
        if (getProblemInAddress() == null && getProblemInCity() == null && getProblemInNumber() == null && formValues.number !== "0" && formValues.address !== "" && formValues.city !== "") {
            isDisabledFunction(false)
        } else {
            isDisabledFunction(true)
        }
    }, [formValues, clickedFields]);


    const getProblemInAddress = (e1) => {
        const address = formValues.address.trim();

        if (!clickedFields.address) return null;

        if (!address.length > 0) return error1

        if (navigator.language.startsWith("es")) {

            if ((address.length < 4) || (!/^(Carrera|Calle|Transversal|Diagonal|Circular|Avenida|Autopista)/.test(address))) return "La dirección debe empezar por: Carrera, Calle, Transversal, Diagonal, Circular, Avenida o Autopista."


            if (!/\d/.test(address)) return "La dirección debe seguir con un espacio y un número."


            const parts = address.split(' ');

            const number = parts[1];
            if (!/^\d+[a-zA-Z]*$/.test(number)) return "El número de la dirección puede contener números y letras opcionales (ejemplo: 14b)"


            if (parts[2] !== '#') return "Después del número, la dirección debe incluir el símbolo '#' y un espacio."


            const hyphenPart = parts[3];
            if (!/^\d+[a-zA-Z]*-\d+$/.test(hyphenPart)) return "La parte después del '#' debe estar en el formato número, guión, número (ejemplo: 197-65)."
        }

    };


    const getProblemInCity = () => {

        const city = formValues.city.trim();

        if (!clickedFields.city) return null;

        if (city.length === 0) return error2

        if (/\d/.test(city)) return noNumbers

        if (city.length < 2) return moreThanOneLetter

    }


    const getProblemInNumber = () => {
        const number = formValues.number.trim();

        if (!clickedFields.number) return null;

        if (String(number).length === 0) return error3

        if (!/^\d{10}$/.test(number)) return tenDigits

    }


    return <Card sx={cardStyle}>
        <Box display={"flex"} flexDirection={"column"} gap="30px">
            <Typography variant='h4' textAlign={'left'}>
                <FormattedMessage id="Billing_Address_Title" />
            </Typography>
            <Box display={"flex"} gap="10px">

                <FormControl>
                    <TextField
                        color={!getProblemInAddress() ? "success" : "error"}
                        required
                        id="outlined-required"
                        label={direccion}
                        defaultValue=""
                        onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
                        onClick={() => setClickedFields({ ...clickedFields, address: true })}
                    />
                    {<Typography variant='body1' color={"red"}>{getProblemInAddress()}</Typography>}
                </FormControl>

                <FormControl>
                    <TextField
                        color={!getProblemInCity() ? "success" : "error"}
                        required
                        id="outlined-required"
                        label={ciudad}
                        defaultValue=""
                        onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                        onClick={() => setClickedFields({ ...clickedFields, city: true })}
                    />
                    {<Typography variant='body1' color={"red"}>{getProblemInCity()}</Typography>}
                </FormControl>

            </Box>
            <Box display={"flex"} justifyContent="space-between">

                <FormControl>
                    <TextField
                        color={!getProblemInNumber() ? "success" : "error"}
                        required
                        id="outlined-required"
                        label={numeroContacto}
                        defaultValue=""
                        onChange={(e) => setFormValues({ ...formValues, number: e.target.value })}
                        onClick={() => setClickedFields({ ...clickedFields, number: true })}
                    />
                    {<Typography variant='body1' color={"red"}>{getProblemInNumber()}</Typography>}
                </FormControl>
            </Box>
        </Box>
    </Card>
}


const PayingMethod = ({ efectivo, tarjeta }) => {
    const [value, setValue] = useState('Efectivo');
  
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <Card sx={cardStyle}>
        <Box display={"flex"} flexDirection={"column"} gap="30px">
          <Typography variant='h4' textAlign={'left'}>
            <FormattedMessage id="Billing_PayMethod_Title" />
          </Typography>
          <Box display={"flex"} gap="10px">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel value="Efectivo" control={<Radio />} label={efectivo} />
                <FormControlLabel value="Tarjeta" control={<Radio />} label={tarjeta} />
              </RadioGroup>
            </FormControl>
          </Box>
        </Box>
      </Card>
    );
  };


