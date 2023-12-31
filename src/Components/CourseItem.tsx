import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function CourseItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box sx={{ flex: 1 }}>
      <Typography variant="h5" sx={{ color: "text.primary" }}>
        {title}
      </Typography>
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
