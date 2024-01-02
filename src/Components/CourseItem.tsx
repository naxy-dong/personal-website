import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { languageToIcon } from "../utils/coursesutil";
import React from "react";

function CourseItem({
  title,
  description,
  languages,
}: {
  title: string;
  description: string;
  languages?: string[];
}) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Typography variant="h5" sx={{ color: "text.primary", marginRight: 1 }}>
          {title}
        </Typography>
        {languages &&
          languages.map((language, index) => (
            <React.Fragment key={index}>
              {languageToIcon(language)}
            </React.Fragment>
          ))}
      </Box>
      <Typography
        variant="subtitle1"
        paragraph
        align="justify"
        sx={{ color: "text.secondary" }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default CourseItem;
