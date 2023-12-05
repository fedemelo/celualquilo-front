import React from 'react';
import { useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PhoneCardSimple from './PhoneCardSimple';
import Breadcrumb from './BreadCrumb';
import { useState } from 'react';
import { useEffect } from 'react';


export default function RentHistory() {

    const intl = useIntl();
    const title = intl.formatMessage({ id: "RentHistory_Title" })
    const BreadcrumbMiAccount = intl.formatMessage({ id: "BreadcrumbMiAccount" })
    const active = intl.formatMessage({ id: "RentHistory_ActiveRent" })
    const renew = intl.formatMessage({ id: "RentHistory_RenewButton" })
    const write = intl.formatMessage({ id: "RentHistory_WriteButton" })
    const [rents, setRents] = useState([]);

    async function getRents() {
        const response = await fetch(`http://localhost:3000/api/v1/users/${localStorage.getItem("accUserId")}/rents`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
        });
        const data = await response.json();
        setRents(data);
    }

    useEffect(() => {
        async function fetchData() {
            if (localStorage.getItem("accUserId")) {
                await getRents();
            }
        }
        fetchData();
    }, []);

    // Se daña cuando no hay rentas asociadas
    const exampleActiveRents = rents.filter((rent) => rent.isActive === true);
    const examplePastRents = rents.filter((rent) => rent.isActive === false);


    let activePhones = [];
    // Se dańa cuando no hay rentas activas
    for (let i = 0; i < exampleActiveRents.length; i++) {
        const phone = JSON.parse(localStorage.getItem(`cel${exampleActiveRents[i].phone.id}`));
        activePhones.push(phone);
    }

    let pastPhones = [];
    // Se dańa cuando no hay rentas pasadas
    for (let i = 0; i < examplePastRents.length; i++) {
        const phone = JSON.parse(localStorage.getItem(`cel${examplePastRents[i].phone.id}`));
        pastPhones.push(phone);
    }



    return (
        <>
            <Breadcrumb breadcrumbs={[
                { href: '/user', text: BreadcrumbMiAccount },
                { href: '', text: title },
            ]} />
            <Stack spacing={3.5} marginBottom={11}>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap');
                </style>
                <Card sx={sectionStyle}>
                    <SectionTitle text={active} />
                    <PhonesRow phones={activePhones} route='rent' text={renew} />
                </Card>
                <Card sx={sectionStyle}>
                    <SectionTitle text={title} />
                    <PhonesRow phones={pastPhones} route='review' text={write} />
                </Card>
            </Stack>
        </>
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


const PhonesRow = ({ phones, route, text }) => {


    return (
        <Grid container spacing={3} padding={2} >

            {phones.map((phone, index) => {
                if (phone) {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <PhoneCardSimple {...phone} cost={`$ ${phone.pricePerDay} COP / día`} route={`/products/${phone.id}/${route}`} buttonText={text} />
                        </Grid>
                    );
                } else {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                        </Grid>
                    );
                }
            })}

        </Grid>
    );
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
