import { 
    Container,
    Box, 
    AppBar, 
    Toolbar, 
    Typography, 
    Tabs, 
    Tab,
    Button,
    List,
    ListItemButton,
    Divider,
    Badge,
    InputBase,
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
    FavoriteBorder,
    ShoppingBagOutlined,
    Search,
    Menu as MenuIcon
} from "@mui/icons-material";

export const Header = ()=> {
    const [active, setActive] = useState(0);
    const [account, setAccount] = useState(null);
    const [usd, setUsd] = useState(null);
    const [menu, setMenu] = useState(null);
    const [searchScreen, setSearchScreen] = useState(false);
    const inputSearch = searchScreen ? "block" : "none";
    const openAccount = Boolean(account);
    const openUsd = Boolean(usd);
    const openMenu = Boolean(menu);
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
    const handleClickMenu = (ev) => {
        setMenu(ev.currentTarget)
    }
    const handleCloseMenu = ()=> {
        setMenu(null);
    }
    return(
        <Container maxWidth="xl" position="fixed">
            <Box sx={{ float: { xs: "right", md: "none" } }}>
                <AppBar position="static" elevation={0}>
                    <Toolbar variant="dense" style={toolbar}>
                        <Typography style={freeShippi} sx={{ 
                            flexGrow: 1,
                            display: { xs: "none", md: "block" }
                        }}>
                            <span style={{ fontSize: "17px" }}>Free Shipping Orders </span>From All item
                        </Typography>
                        <Tabs value={active} 
                            onChange={handleChange} 
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#858585"
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
                            <Button
                                onClick={handleClickAccount}
                                sx={{
                                    color: "#858585"
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
                                    <MenuItem>
                                        <SettingsApplicationsRounded/>
                                        Setting
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            <Button
                                onClick={handleClickUsd}
                                sx={{
                                    color: "#858585"
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
                                    <MenuItem>
                                        <UploadSharp />
                                        uuid
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </Box>
            <Divider style={{ margin: "0 20px" }}/>
            <Box mt={2}>
                <AppBar position="static" elevation={0}>
                    <Toolbar variant="dense" style={toolbar} sx={{
                        justifyContent: "space-between"
                    }}>
                        <Box>
                            <img src={'logos/Bitmap.png'} alt="Bitmap" loading="lazy" />
                        </Box>
                        <Box sx={{ 
                            display: {
                                xs: "none",
                                md: "flex"
                            }
                        }}>
                            <InputBase placeholder="Search..." 
                                sx={{
                                    border: "1px solid #5FA800", 
                                    borderRadius: "3px 0 0 3px",
                                    minWidth: {
                                        sm: "500px",
                                        lg: "757px"
                                    },
                                    padding: "0 10px",
                                    color: "#858585",
                                }}
                            />
                            <Box sx={{ 
                                backgroundColor: "#5FA800", 
                                padding: "4px 4px 3px 4px", 
                                borderRadius: "0 3px 3px 0",
                            }}>
                                <Search sx={{
                                    color: "#FFF"
                                }}/>
                            </Box>
                        </Box>
                        <List sx={{ display: "flex" }}>
                            <ListItemButton sx={{
                                display: {
                                    sm: "flex",
                                    md: "none"
                                }
                            }}>
                                <InputBase 
                                    placeholder="Search..."
                                    sx={{
                                        color: "#858585",
                                        display: inputSearch
                                    }}
                                />
                                <Search
                                    sx={{
                                        fontSize: 30
                                    }}
                                    onClick={() => setSearchScreen(!searchScreen)}
                                />
                            </ListItemButton>
                            <ListItemButton>
                                <Badge badgeContent={4} sx={{
                                    "& .MuiBadge-badge": {
                                        color: "#fff",
                                        backgroundColor: "#5FA800"
                                    }
                                }}>
                                    <FavoriteBorder sx={{ fontSize: 30 }}/>
                                </Badge>
                            </ListItemButton>
                            <ListItemButton>
                                <Badge badgeContent={2} sx={{
                                    "& .MuiBadge-badge": {
                                        color: "#fff",
                                        backgroundColor: "#5FA800"
                                    }
                                }}>
                                    <ShoppingBagOutlined sx={{ fontSize: 30 }} />
                                </Badge>
                            </ListItemButton>
                            <ListItemButton sx={{
                                display: {
                                    xs: "block",
                                    md: "none"
                                }
                            }}>
                                <MenuIcon
                                    sx={{
                                        fontSize: 30
                                    }}
                                    onClick={handleClickMenu}
                                />
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
                                    anchorEl={menu}
                                    open={openMenu}
                                >
                                    <MenuList onClick={handleCloseMenu}>
                                        <MenuItem>HOME</MenuItem>
                                        <MenuItem>SHOP</MenuItem>
                                        <MenuItem>COLLECTION</MenuItem>
                                        <MenuItem>PAGES</MenuItem>
                                        <MenuItem>BLOGS</MenuItem>
                                        <MenuItem>BUY VEGIST</MenuItem>
                                    </MenuList>
                                </Menu>
                            </ListItemButton>
                        </List>
                    </Toolbar>
                </AppBar>
            </Box>
        </Container>
    );
}