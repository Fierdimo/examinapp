import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

import { Visibility, ContactMail, Facebook, Google, GitHub, Twitter } from "@mui/icons-material";

export default function Welcome() {
  return (
    <Card sx={{ p: 4, m: 5 }} elevation={5}>
      <Grid item>
        <Box marginLeft={1} marginBottom={4}>
          <Typography variant="h5">Welcome to Examin.app</Typography>
          <Typography variant="body1">
            Please sign-in to your account and start the adventure
          </Typography>
        </Box>

        <Box component="form" noValidate>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel htmlFor="outlined-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-email"
              type={"email"}
              label="Password"
              placeholder="myname@mycompany.com"
            />
          </FormControl>

          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={"password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              placeholder="Add all security"
            />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox />} label="Remember Me" />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="right">
                  <Link href="#" underline="hover">
                    Forgot password?
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </FormControl>

          <Box marginLeft={2}>
            <Button variant="contained" fullWidth size="large">
              login
            </Button>
          </Box>
          <Box marginTop={2}>
            <Typography variant="body1" align="center">
              New on our platform?
              <Link href="#" underline="hover" marginLeft={1}>
                Create an account
              </Link>
            </Typography>
            <Divider>Or</Divider>
          </Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            <IconButton aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Google">
              <Google />
            </IconButton>
            <IconButton aria-label="Git-Hub">
              <GitHub />
            </IconButton>
            <IconButton aria-label="Twitter">
              <Twitter />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
    </Card>
  );
}
