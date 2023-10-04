import { 
    Container, 
    Box, 
    AppBar, 
    Toolbar, 
    Typography, 
    Tabs, 
    Tab,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Divider
} from "@mui/material";
import { toolbar, freeShippi } from "../../styles/header";
import { useState } from "react";
import { ExpandLess, ExpandMore, SettingsApplicationsRounded, UploadSharp } from "@mui/icons-material";

export const Header = ()=> {
    const [active, setActive] = useState(0);
    const [open, setOpen] = useState(false);
    const [openusd, setOpenUsd] = useState(false);
    const handleChange = (event, newValue)=> {
        setActive(newValue)
    }
    const changeId = index => ({
          id: `${index}`
        }
    )
    const handleClickAccount = ()=> {
        setOpen(!open);
    }
    const handleClickUsd = ()=> {
        setOpenUsd(!openusd);
    }
    return(
        <Container maxWidth="xl" position="fixed">
            <Box sx={{ flexGrow: 1, float: { xs: "right", md: "none" } }}>
                <AppBar position="static" elevation={0}>
                    <Toolbar variant="dense" style={toolbar}>
                        <Typography style={freeShippi} sx={{ 
                            flexGrow: 1,
                            display: { xs: "none", md: "block" }
                        }}>
                            <span style={{ fontSize: "17px" }}>Free Shipping Orders </span>From All item
                        </Typography>
                        <Tabs value={active} onChange={handleChange} sx={{
                            display: { xs: "none", md: "block"}
                        }}>
                            <Tab label="ABOUT US" {...changeId(0)}/>
                            <Tab label="CONTACT US" {...changeId(1)}/>
                        </Tabs>
                        <List>
                            <ListItemButton onClick={handleClickAccount}>
                                <ListItemText primary="ACCOUNT"/>
                                {open ? <ExpandLess /> : <ExpandMore /> }
                            </ListItemButton>
                            <Collapse in={open}>
                                <List>
                                    <ListItemButton>
                                        <SettingsApplicationsRounded />
                                        <ListItemText primary="Setting"/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                        <List>
                            <ListItemButton onClick={handleClickUsd}>
                                <ListItemText primary="USD"/>
                                {openusd ? <ExpandLess /> : <ExpandMore /> }
                            </ListItemButton>
                            <Collapse in={openusd}>
                                <List>
                                    <ListItemButton>
                                        <UploadSharp />
                                        <ListItemText primary="uui"/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Toolbar>
                </AppBar>
            </Box>
            <Divider />
        </Container>
    );
}