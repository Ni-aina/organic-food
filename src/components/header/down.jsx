import { 
    Container,
    Box, 
    AppBar, 
    Toolbar, 
    Tabs, 
    Tab,
    Menu,
    MenuList,
    MenuItem
} from "@mui/material";
import { tabList, itemMenu } from "../../styles/header";
import { useState } from "react";
import { 
    ExpandLess, 
    ExpandMore, 
} from "@mui/icons-material";
import { category } from "../../data/category";
import { menu } from "../../data/menu";
import { Screen } from "./screen";
import { Link } from "react-router-dom";

export const Down = ()=> {
    const [active, setActive] = useState(1);
    const [list, setList] = useState(null);
    const [headphone, setHeadphone] = useState(null);
    const opneHead = Boolean(headphone);
    const openList = Boolean(list);
    const handleChange = (event, newValue) => {
        setActive(newValue)
    }
    const changeId = index => ({
            id: `tab ${index}`
        }
    )
    const handleClickList = (ev)=> {
        setList(ev.currentTarget);
    }
    const handleCloseList = ()=> {
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
            <Box sx={{
                    backgroundColor: "#545454",
                    display: {
                        xs: "none",
                        md: "flex"
                    }
                }}
            >
                <Container maxWidth="xl">
                    <AppBar 
                        position="static"
                        elevation={0}
                        sx={{
                            display: "block",
                            backgroundColor: "#545454"
                        }}
                    >
                        <Toolbar variant="dense">
                            <Box sx={{ flexGrow: 1 }}>
                                <Tabs
                                    value={active}
                                    onChange={handleChange}
                                    TabIndicatorProps={{
                                        style: {
                                            backgroundColor: "transparent",
                                        }
                                    }}
                                >
                                    <Tab
                                        {...changeId(0)}
                                        onClick={handleClickList}
                                        label=
                                        {
                                            <AppBar 
                                                elevation={0}
                                                position="static"
                                                sx={{
                                                    fontSize: 12,
                                                    backgroundColor: "#5FA800",
                                                    color: "#FFF",
                                                    "& .MuiToolbar-root": {
                                                        padding: 0,
                                                        minHeight: 0,
                                                    }
                                                }}
                                            >
                                                <Toolbar>
                                                Browse Category {openList ? <ExpandLess/> : <ExpandMore/>}
                                                </Toolbar>
                                            </AppBar>
                                        } 
                                        sx={{
                                            backgroundColor: "#5FA800",
                                            color: "#FFF"
                                        }}
                                    />
                                    {menu.map((item, key) =>
                                        <Link 
                                            to={`/${item.toLocaleLowerCase()}`}
                                            style={{
                                                textDecoration: "none"
                                            }}
                                            key={key}
                                            relative="path"
                                        >
                                            <Tab
                                                {...changeId(key)}
                                                label={item}
                                                sx={tabList}
                                                style={{
                                                    marginLeft: `${key===0 ? "10px" : "0"}`,
                                                    borderLeft: `${key===0 ? "1px solid #979797" : "none"}`,
                                                    display: `${key!==6 && key!==7 ? "flex" : "none"}`
                                                }}
                                            />
                                        </Link>
                                    )}
                                </Tabs>
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
                                        {category.map((item, key) => 
                                            <MenuItem key={key}>
                                                <img src={`logos/${item[0]}`} alt={item[2]} loading="lazy"/>
                                                <span style={itemMenu}>
                                                    {item[1]}
                                                </span>
                                            </MenuItem>
                                        )}
                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box sx={{
                                display: {
                                    xs: "none",
                                    lg: "flex"
                                }
                            }}>
                                <img src="logos/headphones.png" 
                                    alt="headphones" 
                                    loading="lazy" 
                                    width={30} 
                                    height={30}
                                    style={{
                                        marginTop: 5
                                    }}
                                />
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
                                    width={30} 
                                    height={30}
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
            <Screen />
        </>
    );
}