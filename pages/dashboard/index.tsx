import { Drawer, Grid } from "@mui/material";
import { useState } from "react";
import Body from "./modules/body";
import Menu from "./modules/menu";

export default function Index() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const closeDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(false);
  };
  return (
    <Grid container spacing={1} height="102vh">
      <Drawer
        open={openDrawer}
        onClose={closeDrawer()}
        PaperProps={{
          sx: {
            backgroundColor: "#28243D",
            color: "red",
          },
        }}
      >
        <Menu />
      </Drawer>
      <Grid item xs={12} bgcolor="#F4F5FA">
        <Body setOpenDrawer={setOpenDrawer} />
      </Grid>
    </Grid>
  );
}
