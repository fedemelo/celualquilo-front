import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Copyright () {
    return <Box sx={{
        paddingBottom: "20px",
    }}>
        <Typography variant="body2" align="center"
            sx={{
                color: "white",
            }}>
            {"Copyright © "}
            <Link href="https://celualquilo.com/">
                CeluAlquilo
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    </Box>
}