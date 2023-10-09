import { HighMid } from "./highMid";
import { Down } from "./down";
import { Box } from "@mui/material";

export const Header = ()=> {
    return(
        <Box 
            sx={{ 
                position: "fixed",
                top: 0,
                width: "100%",
                backgroundColor: "#FFF"
            }}
         >
            <HighMid />
            <Down />
        </Box>
    );
}