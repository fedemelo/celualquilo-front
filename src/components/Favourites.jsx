import React from 'react';
import { useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';
import Breadcrumb from './BreadCrumb';


export default function Favourites() {

    const intl = useIntl();
    const favs = intl.formatMessage({ id: "Favourites_Title" })
    const rent = intl.formatMessage({ id: "Rent" })
    const BreadcrumbMiAccount = intl.formatMessage({ id: "BreadcrumbMiAccount" })

    const [favouriteList, setFavouriteList] = React.useState([]);

    async function getFavourites() {
        const response = await fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem("accUserId")}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        const data = await response.json();
        let newFavouriteList = [];
        for (let i = 0; i < data.favorites.length; i++) {
            let phone = data.favorites[i];
            let newPhone ={
                name: phone.name,
                days: "5 días de alquiler",
                image: phone.image,
                cost: `$ ${phone.pricePerDay} COP / día`,
                buttonText: "Alquilar",
            }
            newFavouriteList.push(newPhone);
        }
        setFavouriteList(newFavouriteList);
    }

    React.useEffect(() => {
        getFavourites();
    }, []);

    return (
        <>
            <Breadcrumb breadcrumbs={[
                { href: '/user', text: BreadcrumbMiAccount },
                { href: '', text: favs },
            ]} />
            <Stack spacing={3.5} marginBottom={11}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
                </style>
                <Card sx={sectionStyle}>
                    <SectionTitle text={favs} />
                    <PhonesRow phones={favouriteList} rent={rent}/>
                </Card>
            </Stack>
        </>
    );
}


const PhonesRow = ({ phones, rent }) => {
    return (
        <Grid container spacing={3} padding={2} >
            {phones.map((phone, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <PhoneCardSimple {...phone} route={`/products/${1}/rent`} buttonText={rent}/>
                </Grid>
            ))}
        </Grid>
    );
}


const sectionStyle = {
    width: "80vw",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
}

const SectionTitle = ({ text }) =>
    <Typography sx={{
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "25px",
        lineHeight: "30px",
        color: "#000000",
        textAlign: "left",
        p: 2,
    }}>
        {text}
    </Typography>