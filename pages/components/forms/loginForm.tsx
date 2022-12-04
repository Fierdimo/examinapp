import {
  Key,
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
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function LoginForm() {
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
            sx={{ mr: 2 }}
          >
            {showIcons ? <PersonAddDisabledOutlined /> : <PersonAddOutlined />}
          </IconButton>
        }
        title={"Basic Sign-in"}
      />
      <CardContent>
        <Paper elevation={5} sx={{ p: 4 }}>
        <Typography variant="h5">Examinapp</Typography>
          <Typography variant="body1">Ingrese sus credenciales para tener acceso</Typography>
          <Box component="form">
            <FormControl fullWidth sx={{ mt: 4 }}>
              <InputLabel htmlFor="outlined-login-username">
                Username
              </InputLabel>
              <OutlinedInput
                id="outlined-login-username"
                type={"text"}
                startAdornment={
                  <InputAdornment position="start">
                    {showIcons ? <PersonOutlineOutlined /> : <></>}
                  </InputAdornment>
                }
                label="Username"
                placeholder="MyUserName"
              />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel htmlFor="outlined-login-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-login-password"
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
            </FormControl>

            <Box sx={{ mt: 1, mb: 1 }}>
              <FormControlLabel
                sx={{ mb: 1 }}
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
              <Button fullWidth size="large" variant="contained">
                Login
              </Button>
            </Box>
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
}
