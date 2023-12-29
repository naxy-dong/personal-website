import { IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <Typography variant="h6">My socials</Typography>

      <IconButton aria-label="LinkedIn">
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Email">
        <EmailIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="GitHub">
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Discord" style={{width: "51px", height: "51px"}}>
        <FontAwesomeIcon icon={faDiscord} />
      </IconButton>
    </>
  );
}

export default Contact;
