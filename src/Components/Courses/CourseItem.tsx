import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CourseTitle from "./CourseTitle";

function CourseItem({
  title,
  description,
  languages,
  wantTitle,
}: {
  title: string;
  description: string;
  languages?: string[];
  wantTitle?: boolean;
}) {
  return (
    <Box>
      {wantTitle && <CourseTitle title={title} languages={languages} />}
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
