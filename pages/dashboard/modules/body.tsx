import { Grid } from "@mui/material";

export default function Body({...props}){   

    return(
        
      <Grid container textAlign={'center'} height={'100%'}>
        <Grid item xs={4} border={1} >
            content
        </Grid>
        <Grid item xs={4} border={1}>
            content 
        </Grid>
        <Grid item xs={4} border={1}>
            content 
        </Grid>
      </Grid>
    )
}