import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFound = ()=> (
    <Box sx={{ textAlign: "center", marginTop: "30%" }}>
        Error not found <bt />
        <Link to='/home' onClick={()=> window.onload()}>Back to Home</Link>
    </Box>
)