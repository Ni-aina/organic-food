import { Box, Grid, Container, Typography, Button, Menu, MenuList } from "@mui/material";
import { box } from "../../styles/footer";
import { useState } from "react";

export const Footer = ()=> {
    const square = [0, 1, 2, 3];
    const [service, setService] = useState(null);
    const openService = Boolean(service);
    const handleService = (ev)=> {
        setService(ev.currentTarget);
    }
    const handleCloseService = ()=> {
        setService(null);
    }
    const [terms, setTerms] = useState(null);
    const openTerms = Boolean(terms);
    const handleTerms = (ev)=> {
        setTerms(ev.currentTarget);
    }
    const handleCloseTerms = ()=> {
        setTerms(null);
    }
    const [account, setAccount] = useState(null);
    const openAccount = Boolean(account);
    const handleAccount = (ev)=> {
        setAccount(ev.currentTarget);
    }
    const handleCloseAccount = ()=> {
        setAccount(null);
    }
    const [title, setTitle] = useState(null);
    const openTitle = Boolean(title);
    const handleTitle = (ev)=> {
        setTitle(ev.currentTarget);
    }
    const handleCloseTitle = ()=> {
        setTitle(null);
    }
    return(
        <Box sx={box}>
            <Box>
                <Container>
                    <Grid mt={2} container spacing={1} sx={{
                        display: {
                            xs: "none",
                            md: "flex"
                        }
                    }}>
                        <Grid item md={2}>
                            <img src="/logos/Bitmap.png" alt="vegist" loading="lazy" />
                            <Typography mt={1}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography color={"#FFF"} >Services</Typography>
                            <Typography mt={1} fontSize={14}>
                                <span style={{ color: "#5FA800" }}>
                                    About Vegist <br />
                                </span> 
                                Faq's <br />
                                Contact Us <br />
                                News <br />
                                Sitemap
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography color={"#FFF"} >Privacy & Terms</Typography>
                            <Typography mt={1} fontSize={14}>
                                Payment Policy <br />
                                Privacy Policy <br />
                                Return Policy <br />
                                Shipping Policy <br />
                                Terms & Conditions
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography color={"#FFF"} >My account</Typography>
                            <Typography mt={1} fontSize={14}>                                
                                Account <br />
                                My Cart <br />
                                Order History <br />
                                Wishlist
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography color={"#FFF"} >Menu title</Typography>
                            <Typography mt={1} fontSize={14}>
                                Fruits <br />
                                Fast Foods <br />
                                Vegetable <br />
                                Salads <br />
                                Bestseller
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Typography color={"#FFF"} >Get The Latest Deals</Typography>
                            <Typography mt={1} fontSize={14}>
                                And Receive $20 Coupon For First Shopping
                            </Typography>
                            ...
                            <Grid container spacing={1}>
                                {square.map(key => 
                                    <Grid key={key} item
                                        sx={{
                                            mt: 2,
                                            width: 35,
                                            height: 35,
                                            backgroundColor: "#FFF",
                                            ml: 1,
                                            borderRadius: 2
                                        }}
                                    >
                                        { key===0 ? <img src="/logos/Call.png" alt="call" loading="lazy" /> : "" }
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid mt={2} container spacing={1} sx={{
                        display: {
                            xs: "grid",
                            md: "none"
                        },
                        textAlign: "center"
                    }}>
                        <Grid item md={2}>
                            <img src="/logos/Bitmap.png" alt="vegist" loading="lazy" />
                            <Typography mt={1}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            </Typography>
                        </Grid>
                        <Grid item md={2}>
                            <Button onClick={handleService} sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "0.1px solid #D8D8D8",
                                width: "100%"
                            }}>
                                <Typography color={"#FFF"}
                                    style={{
                                    cursor: "Pointer"
                                    }}>
                                    Services
                                </Typography>
                                <img src="/logos/add-icon.png" alt="vegist" loading="lazy" />
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
                                anchorEl={service}
                                open={openService}
                            >
                                <MenuList
                                    onClick={handleCloseService}
                                    sx={{
                                        fontSize: 12,
                                        backgroundColor: "#545454",
                                        color: "#FFF"
                                    }}
                                >
                                    <Typography m={2} fontSize={14}>
                                        <span style={{ color: "#5FA800" }}>
                                            About Vegist <br />
                                        </span> 
                                        Faq's <br />
                                        Contact Us <br />
                                        News <br />
                                        Sitemap
                                    </Typography>
                                </MenuList>
                            </Menu>
                            <Button onClick={handleTerms} sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "0.1px solid #D8D8D8",
                                width: "100%"
                            }}>
                                <Typography color={"#FFF"} >Privacy & Terms</Typography>
                                <img src="/logos/add-icon.png" alt="add-icon" loading="lazy" />
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
                                anchorEl={terms}
                                open={openTerms}
                            >
                                <MenuList
                                    onClick={handleCloseTerms}
                                    sx={{
                                        fontSize: 12,
                                        backgroundColor: "#545454",
                                        color: "#FFF"
                                    }}
                                >
                                    <Typography m={2} fontSize={14}>
                                        Payment Policy <br />
                                        Privacy Policy <br />
                                        Return Policy <br />
                                        Shipping Policy <br />
                                        Terms & Conditions
                                    </Typography>
                                </MenuList>
                            </Menu>
                            <Button onClick={handleAccount} sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "0.1px solid #D8D8D8",
                                width: "100%"
                            }}>
                                <Typography color={"#FFF"}
                                    style={{
                                    cursor: "Pointer"
                                    }}>
                                    My Account
                                </Typography>
                                <img src="/logos/add-icon.png" alt="vegist" loading="lazy" />
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
                                    sx={{
                                        fontSize: 12,
                                        backgroundColor: "#545454",
                                        color: "#FFF"
                                    }}
                                >
                                    <Typography m={2} fontSize={14}>
                                        Account <br />
                                        My Cart <br />
                                        Order History <br />
                                        Wishlist
                                    </Typography>
                                </MenuList>
                            </Menu>
                            <Button onClick={handleTitle} sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderBottom: "0.1px solid #D8D8D8",
                                width: "100%"
                            }}>
                                <Typography color={"#FFF"} >Menu Title</Typography>
                                <img src="/logos/add-icon.png" alt="vegist" loading="lazy" />
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
                                anchorEl={title}
                                open={openTitle}
                            >
                                <MenuList
                                    onClick={handleCloseTitle}
                                    sx={{
                                        fontSize: 12,
                                        backgroundColor: "#545454",
                                        color: "#FFF"
                                    }}
                                >
                                    <Typography m={2} fontSize={14}>
                                        Fruits <br />
                                        Fast Foods <br />
                                        Vegetable <br />
                                        Salads <br />
                                        Bestseller
                                    </Typography>
                                </MenuList>
                            </Menu>
                        </Grid>
                        <Grid item mt={2} sx={{
                            textAlign: "left"
                        }}>
                            <Typography color={"#FFF"} >Get The Latest Deals</Typography>
                            <Typography mt={1} fontSize={14}>
                                And Receive $20 Coupon For First Shopping
                            </Typography>
                            ...
                            <Grid container spacing={1}>
                                {square.map(key => 
                                    <Grid key={key} item
                                        sx={{
                                            mt: 2,
                                            width: 35,
                                            height: 35,
                                            backgroundColor: "#FFF",
                                            ml: 1,
                                            borderRadius: 2
                                        }}
                                    >
                                        { key===0 ? <img src="/logos/Call.png" alt="call" loading="lazy" /> : "" }
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#5FA800",
                color: "#FFF",
                width: "100%",
                height: 50,
                padding: 1.5,
                fontFamily: "Poppins-Medium sans-serif"
            }}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} >
                            <Typography sx={{
                                textAlign: "center"
                            }}>
                                Copyright 2023 spacingtech rights reserved
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{
                            display: {
                                xs: "none",
                                md: "block"
                            },
                            textAlign: "end"
                        }}>
                            <img src='/logos/Mode.png' alt="mode" loading="lazy" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}