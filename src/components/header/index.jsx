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
    Collapse,
    Divider,
    Badge,
    InputBase,
    Menu,
    MenuList,
    MenuItem
} from "@mui/material";
import { toolbar, freeShippi, tabList, itemMenu } from "../../styles/header";
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
    const [list, setList] = useState(null);
    const [listScreen, setListSreen] = useState(null);
    const [headphone, setHeadphone] = useState(null);
    const [searchScreen, setSearchScreen] = useState(false);
    const onSearch = searchScreen ? "none" : "flex";
    const opneHead = Boolean(headphone);
    const openAccount = Boolean(account);
    const openUsd = Boolean(usd);
    const openMenu = Boolean(menu);
    const openList = Boolean(list);
    const openListScreen = Boolean(listScreen);
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
    const handleClickMenu = (ev)=> {
        setMenu(ev.currentTarget);
    }
    const handleCloseMenu = ()=> {
        setMenu(null);
    }
    const handleClickList = (ev)=> {
        setList(ev.currentTarget);
    }
    const handleCloseList = ()=> {
        setList(null);
    }
    const handleClickListScreen = (ev)=> {
        setList(ev.currentTarget);
    }
    const handleCloseListScreen = ()=> {
        setList(null);
    }
    const onClickHeadphone = (ev)=> {
        setHeadphone(ev.currentTarget);
    }
    const onCloseHeadphone = ()=> {
        setHeadphone(null);
    }
    return(
        <>
            <Container maxWidth="xl" position="fixed">
                <Box sx={{
                    float: {
                        xs: "right",
                        md: "none"
                    }
                }}>
                    <AppBar position="static" elevation={0}
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
                                        backgroundColor: "#EAEAEA"
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
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Divider style={{ margin: "0px 20px", clear: "both" }}/>
                <Box mt={2}>
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
                                    <Collapse in={searchScreen} timeout="auto" unmountOnExit>
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
                                        onClick={() => setSearchScreen(!searchScreen)}
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
                                        <MenuList 
                                            onClick={handleCloseMenu}
                                            sx={{
                                                fontSize: 12,
                                                backgroundColor: "#545454",
                                                color: "#FFF"
                                            }}
                                        >
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>HOME</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>SHOP</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>COLLECTION</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>PAGES</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>BLOGS</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>BUY VEGIST</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>ABOUT US</MenuItem>
                                            <MenuItem sx={{
                                                fontSize: 12
                                            }}>CONTACT US</MenuItem>
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
            </Container>
            <Box sx={{
                backgroundColor: "#545454",
                display: {
                    xs: "none",
                    md: "flex"
                },
            }}>
                <Container maxWidth="xl">
                    <AppBar 
                        position="static"
                        elevation={0}
                        sx={{
                            backgroundColor: "#545454"
                        }}
                        >
                        <Toolbar variant="dense">
                            <Box sx={{ flexGrow: 1 }}>
                                <Tabs>
                                    <Tab 
                                        onClick={handleClickList}
                                        label={
                                            <Button sx={{
                                                    fontSize: 12,
                                                    padding: 0,
                                                    color: "#FFF"
                                                }}
                                            >
                                                Browse Category {openList ? <ExpandLess/> : <ExpandMore/>}
                                            </Button>
                                        } 
                                        sx={{
                                            backgroundColor: "#5FA800",
                                            color: "#FFF"
                                        }}
                                    />
                                    <Menu
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "right"
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right"
                                        }}
                                        anchorEl={list}
                                        open={openList}
                                        PaperProps={{
                                            style: {
                                                width: 185,
                                                borderRadius: 0
                                            }
                                        }}
                                    >
                                        <MenuList
                                            onClick={handleCloseList}
                                            sx={{
                                                backgroundColor: "#FCFAF9",
                                                border: "1px solid #EAEAEA"
                                            }}
                                        >
                                            <MenuItem>
                                                <img src="logos/Fruits.png" alt="Fruits" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Fresh Fruits
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Meat.png" alt="Meat" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Fresh Meat
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Vegetable.png" alt="Vegetable" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Fresh Vegetable
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Searfood.png" alt="Searfood" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Green Searfood
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Dryfruit.png" alt="Dryfruit" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Organic Dryfruit
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Masala.png" alt="Masala" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Organic Masala
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Juice.png" alt="Juice" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Organic Juice
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Fish.png" alt="Fish" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Sea & Fish
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Fruit.png" alt="Fruit" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Summer Fruit
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Rack.png" alt="Rack" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Baker's Rack
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Chesse.png" alt="Chesse" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Dairy & Chesse
                                                </span>
                                            </MenuItem>
                                            <MenuItem>
                                                <img src="logos/Wine.png" alt="Wine" loading="lazy"/>
                                                <span style={itemMenu}>
                                                    Organic Wine
                                                </span>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <Tab label="HOME" 
                                        sx={tabList}
                                        style={{
                                            marginLeft: 10,
                                            borderLeft: "1px solid #979797"
                                        }}
                                    />
                                    <Tab label="SHOP" 
                                        sx={tabList}
                                    />
                                    <Tab label="COLLECTION" 
                                        sx={tabList}
                                    />
                                    <Tab label="PAGES" 
                                        sx={tabList}
                                    />
                                    <Tab label="BLOGS" 
                                        sx={tabList}
                                    />
                                    <Tab label="BUY VEGIST" 
                                        sx={tabList}
                                    />
                                </Tabs>
                            </Box>
                            <Box sx={{
                                display: {
                                    xs: "none",
                                    lg: "flex"
                                }
                            }}>
                                <img src="logos/headphones.png" alt="headphones" loading="lazy"/>
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
                            <Box sx={{
                                display: {
                                    xs: "flex",
                                    lg: "none"
                                }
                            }}>
                                <img src="logos/headphones.png" alt="headphones" loading="lazy"
                                    onClick={onClickHeadphone}
                                    style={{
                                        cursor: "pointer",
                                        marginRight: 15
                                    }}
                                />
                                <Menu
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    anchorEl={headphone}
                                    open={opneHead}
                                >
                                    <MenuList
                                        onClick={onCloseHeadphone}
                                        sx={{
                                            backgroundColor: "#545454"
                                        }}
                                    >
                                        <MenuItem>
                                            <span style={{
                                                marginLeft: 10,
                                                color: "#5FA800"
                                            }}>
                                                Hotline
                                            </span>
                                        </MenuItem>
                                        <MenuItem>
                                            <span style={{
                                                fontSize: 12,
                                                marginLeft: 10,
                                                color: "#CACACA"
                                            }}>
                                                0123 456789
                                            </span>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Container>
            </Box>
            <Container maxWidth="xl" sx={{
                display: {
                    xs: "flex",
                    md:"none"
                },
            }}>
                <Box sx={{
                        backgroundColor: "#5FA800",
                        color: "#FFF",
                        padding: 1,
                        textAlign: "center",
                        cursor: "pointer",
                        width: "100%"
                    }}
                    onClick={handleClickListScreen}
                >
                    <Button
                        sx={{
                            color: "#FFF",
                            "&:active": {
                                backgroundColor: "transparent"
                            }
                        }}
                    >
                        Browse Category {openListScreen ? <ExpandLess/> : <ExpandMore/>}
                    </Button> 
                </Box>
                <Menu
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right"
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    anchorEl={listScreen}
                    open={openListScreen}
                    PaperProps={{
                        style: {
                            width: 100,
                            borderRadius: 0
                        }
                    }}
                >
                    <MenuList
                        onClick={handleCloseListScreen}
                        sx={{
                            backgroundColor: "#FCFAF9",
                            border: "1px solid #EAEAEA"
                        }}
                    >
                        <MenuItem>
                            <img src="logos/Fruits.png" alt="Fruits" loading="lazy"/>
                            <span style={itemMenu}>
                                Fresh Fruits
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Meat.png" alt="Meat" loading="lazy"/>
                            <span style={itemMenu}>
                                Fresh Meat
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Vegetable.png" alt="Vegetable" loading="lazy"/>
                            <span style={itemMenu}>
                                Fresh Vegetable
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Searfood.png" alt="Searfood" loading="lazy"/>
                            <span style={itemMenu}>
                                Green Searfood
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Dryfruit.png" alt="Dryfruit" loading="lazy"/>
                            <span style={itemMenu}>
                                Organic Dryfruit
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Masala.png" alt="Masala" loading="lazy"/>
                            <span style={itemMenu}>
                                Organic Masala
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Juice.png" alt="Juice" loading="lazy"/>
                            <span style={itemMenu}>
                                Organic Juice
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Fish.png" alt="Fish" loading="lazy"/>
                            <span style={itemMenu}>
                                Sea & Fish
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Fruit.png" alt="Fruit" loading="lazy"/>
                            <span style={itemMenu}>
                                Summer Fruit
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Rack.png" alt="Rack" loading="lazy"/>
                            <span style={itemMenu}>
                                Baker's Rack
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Chesse.png" alt="Chesse" loading="lazy"/>
                            <span style={itemMenu}>
                                Dairy & Chesse
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <img src="logos/Wine.png" alt="Wine" loading="lazy"/>
                            <span style={itemMenu}>
                                Organic Wine
                            </span>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Container>
        </>
    );
}