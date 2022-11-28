import { Box, Typography } from "@mui/material";

export default function UserListing({_token}) {

  const HandleToken = (token: string) => {
    return <Typography>{token}</Typography>;
  };

  return (
    <Box>
      {HandleToken(_token)}
    </Box>
  );
}
