import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Body({...props}){
   

    return(
        <Box>
            <Typography>This is a body</Typography>
            <Button onClick={()=> props.setOpenDrawer(true)}>open drawer</Button>
        </Box>
    )
}