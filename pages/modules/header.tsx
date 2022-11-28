import { Grid, Typography } from "@mui/material";

export default function Header(){
    return(
        <Grid container bgcolor={'#28243D'} height={'100%'}>
            <Grid item>
                <Typography variant="h4">Examin.app</Typography>
            </Grid>
        </Grid>

    )
}