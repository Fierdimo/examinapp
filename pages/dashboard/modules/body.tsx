import { Box, Grid, Toolbar } from "@mui/material";
import SigninForm from "../../components/forms/signinForm";
import ContactForm from "../../components/forms/contactForm";
import LoginForm from "../../components/forms/loginForm";

export default function Body() {
  return (
    <Box height={"100%"}>
      <Toolbar />
      <Grid container spacing={1} justifyItems={"center"}>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <SigninForm />
        </Grid>
        <Grid item xs={5}>
          <ContactForm />
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <LoginForm />
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </Box>
  );
}
