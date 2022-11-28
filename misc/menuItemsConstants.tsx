import { MonetizationOnOutlined } from "@mui/icons-material";
import itemProps from "./types/itemProps";

const dashboardItems: Array<itemProps> = [
    {
      title: "Monetización",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
    {
      title: "Analitica",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
    {
      title: "eCommerce",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
  ];

  const facturasItems: Array<itemProps> =  [
    {
      title: "Listar",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
    {
      title: "Agregar",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
    {
      title: "Previsualizar",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
  ];

  const correoItems: Array<itemProps> = [
    {
      title: "Listar",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
    {
      title: "Escribir",
      titleColor: "white",
      icon: <MonetizationOnOutlined />,
      iconColor: "white",
    },
  ]
  
  const MenuItems = {facturasItems, dashboardItems, correoItems}

  export default MenuItems