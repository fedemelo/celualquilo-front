import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb({ breadcrumbs }) {
    const handleClick = (event) => {
        event.preventDefault();
        // Handle click logic here
    };

    return (
        <Toolbar
            sx={{
                alignItems: 'flex-start',
                flexDirection: 'row',
                paddingTop: '10px',
            }}
        >
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                    <React.Fragment key={index}>
                        {index < breadcrumbs.length - 1 ? (
                            <Link
                                underline="hover"
                                color="inherit"
                                href={breadcrumb.href}
                                onClick={handleClick}
                            >
                                {breadcrumb.text}
                            </Link>
                        ) : (
                            <Typography color="text.primary">{breadcrumb.text}</Typography>
                        )}
                    </React.Fragment>
                ))}
            </Breadcrumbs>
        </Toolbar>
    );
}