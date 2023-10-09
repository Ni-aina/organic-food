import { 
    Container,
    Box, 
    Button,
    Menu,
    MenuList,
    MenuItem
} from "@mui/material";
import { itemMenu } from "../../styles/header";
import { useState } from "react";
import { 
    ExpandLess, 
    ExpandMore, 
} from "@mui/icons-material";
import { category } from "../../data/category";


export const Screen = ()=> {
    const [list, setList] = useState(null);
    const openList = Boolean(list);
    const handleClick = (ev)=> {
        setList(ev.currentTarget);
    }
    const handleClose = ()=> {
        setList(null);
    }
    return(
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
                onClick={handleClick}
            >
                <Button
                    sx={{
                        color: "#FFF",
                        "&:active": {
                            backgroundColor: "transparent"
                        }
                    }}
                >
                    Browse Category {openList ? <ExpandLess/> : <ExpandMore/>}
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
                anchorEl={list}
                open={openList}
                PaperProps={{
                    style: {
                        width: 200,
                        borderRadius: 0
                    }
                }}
            >
                <MenuList
                    onClick={handleClose}
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
        </Container>
    );
}