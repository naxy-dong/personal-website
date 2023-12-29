import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material";

function CourseItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const theme = useTheme();

  return (
    <CardContent sx={{ flex: 1 }}>
      <Typography variant="h5" sx={{ color: theme.palette.text.primary }}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        paragraph
        align="justify"
        sx={{ color: theme.palette.text.secondary }}
      >
        {description}
      </Typography>
    </CardContent>
  );
}

export default CourseItem;
