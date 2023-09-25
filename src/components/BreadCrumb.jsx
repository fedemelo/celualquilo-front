import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';

export default function Breadcrumb({ breadcrumbs }) {
    const handleClick = (event) => {
        event.preventDefault();
    };

    const breadcrumbItems = breadcrumbs.map((breadcrumb, index) => (
        index < breadcrumbs.length - 1 ? (
            <Link
                key={index}
                underline="hover"
                color="inherit"
                href={breadcrumb.href}
                onClick={handleClick}
            >
                {breadcrumb.text}
            </Link>
        ) : (
            <Typography key={index} color="text.primary">
                {breadcrumb.text}
            </Typography>
        )
    ));

    return (
        <Toolbar
            sx={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingTop: '10px',
            }}
        >
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbItems}
            </Breadcrumbs>
        </Toolbar>
    );
}
