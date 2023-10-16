import React from 'react';
import { FormattedMessage, useIntl } from "react-intl";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const moneda = "COP"

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

export default function PriceDetails(props) {
    const dias = props.dias <= 180 ? props.dias : 180
    const pricePerDay = props.price_per_day
    return (
        <Card sx={cardStyle}>
            <Box display={"flex"} flexDirection={"column"} gap="15px">
                <Typography variant='h4' textAlign={'left'} data-testid="RentDetail_PriceInfo_Title">
                    <FormattedMessage id="RentDetail_PriceInfo_Title" />
                </Typography>
                <Box display={"flex"} justifyContent="space-between" >
                    <Typography variant='h5'>
                        <FormattedMessage id="RentDetail_PricePer" /> {dias} <FormattedMessage id="RentDetail_PriceInfo_Days" />
                    </Typography>
                    <Typography variant='h5'>
                        ${Number(pricePerDay) * (Number(dias))} {moneda}/<FormattedMessage id="RentDetail_PriceInfo_Days" />
                    </Typography>
                </Box>
                <Box display={"flex"} justifyContent="space-between">
                    <Typography variant='h5'>
                        <FormattedMessage id="RentDetail_PriceInfo_Tax" /> 19%
                    </Typography>
                    <Typography variant='h5'>
                        ${Number(pricePerDay) * (Number(dias)) * 0.19} {moneda}/<FormattedMessage id="RentDetail_PriceInfo_Days" />
                    </Typography>
                </Box>
                <Box height="48px">
                </Box>
                <Divider />
                <Box display={"flex"} justifyContent="space-between">
                    <Typography variant='h5'>
                        <FormattedMessage id="RentDetail_PriceInfo_TotalAndTax" />
                    </Typography>
                    <Typography variant='h5'>
                        ${Math.round(Number(pricePerDay) * (Number(dias)) * 11.9) / 10} {moneda}
                    </Typography>
                </Box>
            </Box>
        </Card>
    );
}