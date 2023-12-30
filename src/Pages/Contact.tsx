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

      <IconButton
        aria-label="LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/in/yuxiangd/"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="Email"
        target="_blank"
        href="mailto:yuxiang.dong@stonybrook.edu"
      >
        <EmailIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="GitHub"
        target="_blank"
        href="https://github.com/naxy-dong"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="Discord"
        target="_blank"
        href="https://discordapp.com/users/539630761947693076"
        style={{ width: "51px", height: "51px" }}
      >
        <FontAwesomeIcon icon={faDiscord} />
      </IconButton>
    </>
  );
}

export default Contact;
