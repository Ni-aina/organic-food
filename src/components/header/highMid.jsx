import { 
    Container,
    Box, 
    AppBar, 
    Toolbar, 
    Typography, 
    Tabs, 
    Tab,
    Button,
    Divider,
    Menu,
    MenuList,
    MenuItem
} from "@mui/material";
import { toolbar, freeShippi } from "../../styles/header";
import { useState } from "react";
import { 
    ExpandLess, 
    ExpandMore, 
    SettingsApplicationsRounded, 
    UploadSharp,
} from "@mui/icons-material";
import { Mid } from "./middle";

export const HighMid = ()=> {
    const [active, setActive] = useState(0);
    const [account, setAccount] = useState(null);
    const [usd, setUsd] = useState(null);
    const openAccount = Boolean(account);
    const openUsd = Boolean(usd);
    const handleChange = (event, newValue)=> {
        setActive(newValue)
    }
    const changeId = index => ({
          id: `${index}`
        }
    )
    const handleClickAccount = (ev)=> {
        setAccount(ev.currentTarget);
    }
    const handleCloseAccount = ()=> {
        setAccount(null);
    }
    const handleClickUsd = (ev)=> {
        setUsd(ev.currentTarget);
    }
    const handleCloseUsd = ()=> {
        setUsd(null);
    }
    return(
        <Container maxWidth="xl" position="fixed">
            <Box sx={{
                float: {
                    xs: "right",
                    md: "none"
                }
            }}>
                <AppBar 
                    position="static"
                    elevation={0}
                    sx={{
                        backgroundColor: "#FFF"
                    }}
                >
                    <Toolbar variant="dense" style={toolbar}>
                        <Typography style={freeShippi} sx={{ 
                            flexGrow: 1,
                            display: { xs: "none", md: "block" }
                        }}>
                            <strong style={{ fontSize: "17px" }}>Free Shipping Orders </strong>From All item
                        </Typography>
                        <Tabs 
                            value={active} 
                            onChange={handleChange} 
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#FFF"
                                }
                            }}
                        >
                            <Tab label="ABOUT US" {...changeId(0)}
                                style={{
                                    color: "#858585"
                                }}   
                                sx={{
                                    "&:hover": {
                                        background: "rgba(0, 0, 0, 0.04)"
                                    },
                                    display: { xs: "none", md: "flex"}
                                }}
                            />
                            <Tab label="CONTACT US" {...changeId(1)} 
                                style={{
                                    color: "#858585"
                                }}   
                                sx={{
                                    "&:hover": {
                                        background: "rgba(0, 0, 0, 0.04)"
                                    },
                                    display: { xs: "none", md: "flex"}
                                }}
                            />
                        </Tabs>
                        <Button
                            onClick={handleClickAccount}
                            sx={{
                                color: "#858585",
                                "&:hover": {
                                    borderRadius: 0,
                                    background: "rgba(0, 0, 0, 0.04)"
                                }
                            }}
                        >
                            ACCOUNT {openAccount ? <ExpandLess /> : <ExpandMore /> }
                        </Button>
                        <Menu
                            elevation={0}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            anchorEl={account}
                            open={openAccount}
                            >
                            <MenuList 
                                onClick={handleCloseAccount}
                            >
                                <MenuItem
                                    style={{
                                        color: "#858585"
                                    }}
                                >
                                    <SettingsApplicationsRounded
                                        sx={{
                                            color: "#858585"
                                        }}
                                    />
                                    Setting
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <Button
                            onClick={handleClickUsd}
                            sx={{
                                color: "#858585",
                                "&:hover": {
                                    borderRadius: 0,
                                    background: "rgba(0, 0, 0, 0.04)"
                                }
                            }}
                        >
                            USD {openUsd ? <ExpandLess /> : <ExpandMore /> }
                        </Button>
                        <Menu
                            elevation={0}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            anchorEl={usd}
                            open={openUsd}
                        >
                            <MenuList 
                                onClick={handleCloseUsd}
                            >
                                <MenuItem
                                    style={{
                                        color: "#858585"
                                    }}
                                >
                                    <UploadSharp 
                                        sx={{
                                            color: "#858585"
                                        }}
                                    />
                                    uuid
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
            <Divider style={{ margin: "0px 20px", clear: "both" }}/>
            <Mid />
        </Container>
    );
}