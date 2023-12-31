import { Typography } from "@mui/material";
import MyTimeline from "../Components/MyTimeline";

function AboutMe() {
  return (
    <>
      <Typography variant="h6">About Me</Typography>
      <Typography variant="h6">I'm your local software engineer.</Typography>
      <Typography variant="h6">How I got here. [explains timeline]</Typography>
      <MyTimeline />
    </>
  );
}

export default AboutMe;
