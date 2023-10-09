import { 
    Box, 
    AppBar, 
    Toolbar, 
    List,
    ListItemButton,
    Collapse,
    Badge,
    InputBase,
    Menu,
    MenuList,
    MenuItem
} from "@mui/material";
import { toolbar } from "../../styles/header";
import { useState } from "react";
import { 
    FavoriteBorder,
    ShoppingBagOutlined,
    Search,
    Menu as MenuIcon
} from "@mui/icons-material";
import { menu as list } from "../../data/menu";
export const Mid = ()=> {
    const [menu, setMenu] = useState(null);
    const [search, setSearch] = useState(false);
    const onSearch = search ? "none" : "flex";
    const openMenu = Boolean(menu);
    const handleClick = (ev)=> {
        setMenu(ev.currentTarget);
    }
    const handleClose = ()=> {
        setMenu(null);
    }
    return(
        <Box mt={0}>
            <AppBar position="static" elevation={0}
                sx={{
                    backgroundColor: "#FFF"
                }}
            >
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
                                md: "none"
                            },
                            padding: {
                                xs: 1
                            },
                            marginLeft: 1
                        }}>
                            <Collapse in={search} timeout="auto" unmountOnExit>
                                <InputBase 
                                    placeholder="Search..."
                                    sx={{
                                        color: "#858585",
                                    }}
                                />
                            </Collapse>
                            <Search
                                sx={{
                                    fontSize: 30
                                }}
                                onClick={() => setSearch(!search)}
                            />
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                padding: {
                                    xs: 1,
                                    md: 2
                                },
                                display: onSearch
                            }}
                        >
                            <Badge badgeContent={4} sx={{
                                "& .MuiBadge-badge": {
                                    color: "#fff",
                                    backgroundColor: "#5FA800"
                                }
                            }}>
                                <FavoriteBorder sx={{ fontSize: 30 }}/>
                            </Badge>
                        </ListItemButton>
                        <ListItemButton
                            sx={{
                                padding: {
                                    xs: 1,
                                    md: 2
                                },
                                display: onSearch
                            }}
                        >
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
                                },
                                padding: {
                                    xs: 1,
                                }
                            }}
                        >
                            <MenuIcon
                                sx={{
                                    fontSize: 30
                                }}
                                onClick={handleClick}
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
                                <MenuList 
                                    onClick={handleClose}
                                    sx={{
                                        fontSize: 12,
                                        backgroundColor: "#545454",
                                        color: "#FFF"
                                    }}
                                >
                                    {list.map((item, key) =>
                                        <MenuItem 
                                            key={key}
                                            sx={{
                                            fontSize: 12
                                        }}>
                                            {item}
                                        </MenuItem>
                                    )}
                                    <MenuItem sx={{
                                        fontSize: 12
                                    }}>
                                        <Box sx={{
                                            display: "flex",
                                        }}>
                                            <img src="logos/headphones.png" alt="headphones" loading="lazy" width={18} height={18}/>
                                            <Box>
                                                <span style={{
                                                    marginLeft: 10,
                                                    color: "#5FA800"
                                                }}>
                                                    Hotline
                                                </span><br />
                                                <span style={{
                                                    fontSize: 12,
                                                    marginLeft: 10,
                                                    color: "#CACACA"
                                                }}>
                                                    0123 456789
                                                </span>
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </ListItemButton>
                    </List>
                </Toolbar>
            </AppBar>
        </Box>
    );
}