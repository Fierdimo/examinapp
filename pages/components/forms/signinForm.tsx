import {
  Key,
  MailOutline,
  PersonAddDisabledOutlined,
  PersonAddOutlined,
  PersonOutlineOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function SigninForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showIcons, setIcons] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card elevation={0}>
      <CardHeader
        action={
          <IconButton
            aria-label="add icons"
            onClick={() => setIcons(!showIcons)}
            sx={{mr:2}}
          >
            {showIcons ? <PersonAddDisabledOutlined /> : <PersonAddOutlined />}
          </IconButton>
        }
        title={'Basic Sign-in'}
      />
      <CardContent>
        <Paper elevation={5} sx={{ p: 3 }}>
          <Box component="form">
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-basic-name">
                Name
              </InputLabel>
              <OutlinedInput
                id="outlined-basic-name"
                type={"text"}
                startAdornment={
                  <InputAdornment position="start">
                    {showIcons ? <PersonOutlineOutlined /> : <></>}
                  </InputAdornment>
                }
                label="Full Name"
                placeholder="MyName"
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-basic-email">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-basic-email"
                type={"email"}
                startAdornment={
                  <InputAdornment position="start">
                    {showIcons ? <MailOutline /> : <></>}
                  </InputAdornment>
                }
                label="Email"
                placeholder="myName@mycomany.org"
              />
              <FormHelperText>
                You can use letters, numbers & periods
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-basic-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-basic-password"
                type={showPassword ? "Text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    {showIcons ? <Key /> : <></>}
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => togglePasswordVisibility()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                placeholder="* * * * * * * * * *"
              />
              <FormHelperText>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth sx={{ mt: 1 }}>
              <InputLabel htmlFor="outlined-basic-password-confirm">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-basic-password-confirm"
                type={showPassword ? "Text" : "password"}
                startAdornment={
                  <InputAdornment position="start">
                    {showIcons ? <Key /> : <></>}
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => togglePasswordVisibility()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                placeholder="* * * * * * * * * *"
              />
              <FormHelperText>
                Make sure to type the same password as above
              </FormHelperText>
            </FormControl>

            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent={"space-between"}
              marginTop={3}
              marginBottom={1}
            >
              <Button size="large" variant="contained">
                Get Started
              </Button>
              <Typography align="center">
                Already have an account? <Link href={"#"}>Log in</Link>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
}
