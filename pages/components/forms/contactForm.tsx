import {
    MailOutline,
    MessageOutlined,
    PersonAddDisabledOutlined,
    PersonAddOutlined,
    PersonOutlineOutlined,
    PhoneOutlined,
  } from "@mui/icons-material";
  import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
  } from "@mui/material";
  import { useState } from "react";
  
  export default function SigninForm() {
    const [showIcons, setIcons] = useState(true);
  
  
  
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
          title={'Basic Contact Form'}
        />
        <CardContent>
          <Paper elevation={5} sx={{ p: 3 }}>
            <Box component="form">
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel htmlFor="outlined-contact-name">
                  Full Name
                </InputLabel>
                <OutlinedInput
                  id="outlined-contact-name"
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
                <InputLabel htmlFor="outlined-contact-email">
                  Email
                </InputLabel>
                <OutlinedInput
                  id="outlined-contact-email"
                  type={"email"}
                  startAdornment={
                    <InputAdornment position="start">
                      {showIcons ? <MailOutline /> : <></>}
                    </InputAdornment>
                  }
                  label="Email"
                  placeholder="myName@mycomany.org"
                />
              </FormControl>
  
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel htmlFor="outlined-contact-phone">
                  Phone number
                </InputLabel>
                <OutlinedInput
                  id="outlined-contact-phone"
                  type={'tel'}
                  startAdornment={
                    <InputAdornment position="start">
                      {showIcons ? <PhoneOutlined /> : <></>}
                    </InputAdornment>
                  }
                  label="Phone number"
                  placeholder="+57 3xx 111 1111"
                />
              </FormControl>
  
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel htmlFor="outlined-contact-password-confirm">
                  Message
                </InputLabel>
                <OutlinedInput
                  id="outlined-contact-password-confirm"
                  type={'text'}
                  startAdornment={
                    <InputAdornment position="start">
                      {showIcons ? <MessageOutlined /> : <></>}
                    </InputAdornment>
                  }
                  label="Message"
                  placeholder="Write your questions here, we will answer as soon as posible"
                  multiline
                  rows={4}
                />
              </FormControl>
  
              <Box
                display="flex"
                flexDirection={"row"}
                justifyContent={"space-between"}
                marginTop={2}
                marginBottom={1}
              >
                <Button size="large" variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          </Paper>
        </CardContent>
      </Card>
    );
  }
  