import { Box, Typography } from "@mui/material";
import React from "react";
import { languageToIcon } from "../../utils/coursesutil";

function CourseTitle({
  title,
  languages,
}: {
  title: string;
  languages?: string[];
}) {
  return (
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
  );
}

export default CourseTitle;
