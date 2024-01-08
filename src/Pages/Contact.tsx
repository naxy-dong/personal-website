import { Box, Grid, Typography } from "@mui/material";
import Socials from "../Components/Contact/Socials";

const ContactPageStyle = { height: "calc(100vh - 4rem); " };

function Contact() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={ContactPageStyle}
    >
      <Grid item sm={12} md={6}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Hit me up on:
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Socials />
          </Box>
        </Box>
      </Grid>
      <Grid item sm={12} md={6} container justifyContent="center">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ padding: 4 }}
        >
          <Typography variant="h5">
            This website is made with <s>love</s> boredom in the winter of 2023
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
