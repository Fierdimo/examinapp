import { Box, CSSObject, styled, Theme } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { useState } from "react";
import Body from "./modules/body";
import Header from "./modules/header";
import Menu from "./modules/menu";

const drawerWidth = 270;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <Box height="100vh" sx={{ width: `calc(100%)` }}>
      <Header openDrawer={open} />
      <Body />
      <Drawer
        variant={"permanent"}
        open={open}
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#28243D",
          },
        }}
      >
        <Menu drawerState={open} />
      </Drawer>
    </Box>
  );
}
