import { SearchRounded } from "@mui/icons-material";
import {
  AppBar,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Slide,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";

export default function Header({ ...props }) {

  const {openDrawer} = props;

  function SwitchBarOnScroll(props: { children: any }) {
    const trigger = useScrollTrigger();
    return (
      <>
        <Slide in={!trigger && !openDrawer} timeout= {2000} mountOnEnter unmountOnExit>
          <AppBar
            sx={{
              width: `calc(100% - 60px)`,
              bgcolor: "rgba(67, 129, 168, 0.8)",
            }}
          >
            {props.children}
          </AppBar>
        </Slide>
      </>
    );
  }

  return (
    <SwitchBarOnScroll>
      <Toolbar>
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-password-confirm">
            Search
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type={"text"}
            endAdornment={
              <InputAdornment position="end" >
                <IconButton aria-label="enter para buscar" edge="end">
                 <SearchRounded/>
                </IconButton>
              </InputAdornment>
            }
            label="Search"            
          />
        </FormControl>
      </Toolbar>
    </SwitchBarOnScroll>
  );
}
