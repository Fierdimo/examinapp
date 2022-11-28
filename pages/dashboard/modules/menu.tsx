import { ExpandCircleDown, HomeOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import menuItems from "./menuItemsConstants";
import itemProps from "./types/itemProps";

export default function Menu() {
  const listItems = (_items: Array<itemProps>) => {
    return _items.map((_item) => (
      <ListItem disablePadding key={_item.title} 
      sx={{"&:hover": {
        borderRadius: "50px",
        backgroundColor: "#474461",
      },}}>
        <ListItemButton>
          <ListItemIcon sx={{ color: _item.iconColor }}>
            {_item.icon}
          </ListItemIcon>
          <ListItemText
            primary={_item.title}
            primaryTypographyProps={{ color: _item.titleColor }}
          />
        </ListItemButton>
      </ListItem>
    ));
  };

  const acordeon = (
    maintitle: String,
    __Items: Array<itemProps>,
    _border: Boolean,
    _new: Boolean = false
  ) => {
    return (
      <Accordion
        disableGutters={true}
        elevation={0}
        sx={{
          background: 'transparent',
          '&:before': {
            display: 'none',
        }
        }}
      >
        <Box
          sx={{
            border: _border ? 1 : 0,
            borderLeft: 0,
            color: "#CECBE3",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandCircleDown sx={{ color: "#CECBE3" }} />}
            sx={{
              borderRadius: "0px 50px 50px 0px",
              "&:hover": {
                backgroundColor: "#474461",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#CECBE3" }}>
              <HomeOutlined />
            </ListItemIcon>
            <Typography variant="body1">{maintitle}</Typography>
            {_new ? (
              <Chip
                label="NEW"
                variant="filled"
                color="error"
                size="small"
                sx={{ fontSize: 10, ml: 1, mr: 1 }}
              />
            ) : (
              <Box></Box>
            )}
          </AccordionSummary>
        </Box>

        <AccordionDetails>
          <List dense>{listItems(__Items)}</List>
        </AccordionDetails>
      </Accordion>
    );
  };

  return (
    <Stack sx={{ p: 2, pl: 0 }}>
      <Typography textAlign={"center"} variant={"h5"} sx={{ color: "white", mb:2 }}>
        TuPagina.com
      </Typography>

      

      {acordeon("Dashboard", menuItems.dashboardItems, false, true)}

      <Divider textAlign="left">
        <Typography variant={"button"} sx={{ fontSize: 12, color: "white" }}>
          Apps y páginas
        </Typography>
      </Divider>

      {acordeon("Facturas", menuItems.facturasItems, false)}
      {acordeon("Correo", menuItems.correoItems, false)}
    </Stack>
  );
}
