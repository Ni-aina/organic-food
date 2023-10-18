import { Box, Typography, Button, TextField, Grid } from "@mui/material";
import { formInput, inputLabelprops, inputProps } from "../../styles/login";

export const Login = ()=> {
    return(
        <Box style={{
            backgroundImage: `url(${'/images/Bitmap.png'})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachement: "fixed",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            height: 728
        }}>
            <Grid 
                container 
                spacing={0} 
                sx={{
                paddingTop: {
                    xs: 5,
                    md: 10
                },
            }}>
                <Grid item xs={2} sm={3} md={4}></Grid>
                <Grid item xs={4}
                    sx={{
                    backgroundColor: "#000",
                    opacity: 0.6,
                    border: "2px solid #E1E1E1",
                    color: "#FFF",
                    textAlign: "center",
                    padding: "20px",
                    borderRadius: 1.5,
                    minWidth: 350,
                    margin: {
                        xs: "0 auto",
                        sm: 0
                    }
                }}>
                    <Typography variant="h6" m={3}>Create Account</Typography>
                    <Typography mb={5}>Please register below account detail</Typography>
                    <TextField 
                        sx={formInput}
                        InputLabelProps={inputLabelprops}
                        inputProps={inputProps}
                        label="First name"
                    />
                    <TextField 
                        sx={formInput}
                        InputLabelProps={inputLabelprops}
                        inputProps={inputProps}
                        label="Last name"
                    />
                    <TextField 
                        sx={formInput}
                        InputLabelProps={inputLabelprops}
                        inputProps={inputProps}
                        label="Email" type="email"
                    />
                    <TextField 
                        sx={formInput}
                        InputLabelProps={inputLabelprops}
                        inputProps={inputProps}
                        label="Password" type="password"
                    />
                </Grid>
                <Grid item xs={3}sx={{
                    display: {
                        xs: "none",
                        lg: "flex"
                    },
                    backgroundColor: "transparent",
                    color: "#777"
                }}>
                    <Box sx={{ margin: "50% 20px" }}>
                        <Typography mb={2} variant="h6" sx={{ textAlign: "center" }}>Already an account holder</Typography>
                        <Button sx={{
                            color: "#5FA800",
                            border: "1px solid #5FA800",
                            backgroundColor: "transparent",
                            width: 300
                        }}>Log in</Button>
                        <Typography mt={2} sx={{ color: "#5FA800" }}><span style={{ color:"#777" }}>*</span> Terms & Conditions.</Typography>
                        <Typography mt={2}>
                            Your privacy and security are important to us. For more
                            information on how we use your data read our <span style={{ color:"#5FA800" }}>privacy policy</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{
                margin: "0 auto",
                display: {
                    xs: "flex",
                    lg: "none"
                },
                backgroundColor: "transparent",
                color: "#777",
                maxWidth: 400
            }}>
                <Box sx={{ margin: "50% 20px" }}>
                    <Typography mb={2} variant="h6" sx={{ textAlign: "center" }}>Already an account holder</Typography>
                    <Button sx={{
                        color: "#5FA800",
                        border: "1px solid #5FA800",
                        backgroundColor: "transparent",
                        width: {
                            xs: 300,
                            md: 400
                        }
                    }}>Log in</Button>
                    <Typography mt={2} sx={{ color: "#5FA800" }}><span style={{ color:"#777" }}>*</span> Terms & Conditions.</Typography>
                    <Typography mt={2}>
                        Your privacy and security are important to us. For more
                        information on how we use your data read our <span style={{ color:"#5FA800" }}>privacy policy</span>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}