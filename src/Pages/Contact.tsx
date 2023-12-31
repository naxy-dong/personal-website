import { Box, Grid, Typography } from "@mui/material";
import Socials from "../Components/Socials";

function Contact() {
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item sm={12} md={6}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h5">Hit me up on:</Typography>
          <br />
          <Socials />
        </Box>
      </Grid>
      <Grid item sm={12} md={6} container justifyContent="center" style={{ height: '100%' }}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="h5">
            This website is made with <s>love</s> boredom in the winter of 2023
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contact;
