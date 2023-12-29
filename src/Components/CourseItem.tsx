import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function CourseItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card variant="outlined" sx={{ display: "flex" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography component="h2" variant="h5">
          {title}
        </Typography>
        <Typography variant="subtitle1" paragraph>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CourseItem;
