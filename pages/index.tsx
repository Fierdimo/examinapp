
import { CssBaseline, Box } from "@mui/material";

import Dashboard from '../pages/dashboard'

export default function Home() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Dashboard />
    </Box>
  );
}
