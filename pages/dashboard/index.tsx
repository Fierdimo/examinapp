import { Drawer, Grid } from "@mui/material";
import Body from "./modules/body";
import Menu from "./modules/menu";

export default function Index() {
  return (
    <Grid container spacing={1} height="102vh">
      <Drawer open={true}
      PaperProps={{
        sx: {
          backgroundColor: '#28243D',
          color: "red",
        }
      }}>
        <Menu />
      </Drawer>
      <Grid item xs={12} bgcolor='#F4F5FA'>
        <Body />
      </Grid>
    </Grid>
  );
}
