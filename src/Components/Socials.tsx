import { IconButton, Typography } from "@mui/material";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import React from "react";

const textStyle = { marginLeft: 1 };

function Socials() {
  return (
    <React.Fragment>
      <IconButton
        aria-label="LinkedIn"
        target="_blank"
        href="https://www.linkedin.com/in/yuxiangd/"
      >
        <SubdirectoryArrowRightIcon fontSize="medium" />
        <LinkedInIcon fontSize="large" />
        <Typography sx={textStyle} variant="h6">
          LinkedIn
        </Typography>
      </IconButton>

      <IconButton
        aria-label="Email"
        target="_blank"
        href="mailto:yuxiang.dong@stonybrook.edu"
      >
        <SubdirectoryArrowRightIcon fontSize="medium" />
        <EmailIcon fontSize="large" />
        <Typography sx={textStyle} variant="h6">
          Email
        </Typography>
      </IconButton>

      <IconButton
        aria-label="GitHub"
        target="_blank"
        href="https://github.com/naxy-dong"
      >
        <SubdirectoryArrowRightIcon fontSize="medium" />
        <GitHubIcon fontSize="large" />
        <Typography sx={textStyle} variant="h6">
          Github
        </Typography>
      </IconButton>

      <IconButton
        aria-label="Discord"
        target="_blank"
        href="https://discordapp.com/users/539630761947693076"
      >
        <SubdirectoryArrowRightIcon fontSize="medium" />
        <FontAwesomeIcon
          style={{ width: "35px", height: "35px" }}
          icon={faDiscord}
        />
        <Typography sx={textStyle} variant="h6">
          Discord
        </Typography>
      </IconButton>
    </React.Fragment>
  );
}

export default Socials;
