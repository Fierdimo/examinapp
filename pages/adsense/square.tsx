import { Box, Typography } from "@mui/material";
import Script from "next/script";

export default function SquareAdsense() {
  return (
    <Box border={1}>
      <ins
        data-adbreak-test="on"
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4395676148568756"
        data-ad-slot="960072055"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="__ads_id">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
    </Box>
  );
}
