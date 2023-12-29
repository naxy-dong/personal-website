import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CourseItem from "./CourseItem";
import Supplement from "./Supplement";

function CourseItemWithSupplements({
  title,
  description,
  supplements,
}: {
  title: string;
  description: string;
  supplements?: { label: string; link: string }[];
}) {
  return (
    <Card>
      <Grid container>
        <Grid item xs={9}>
          <CourseItem title={title} description={description} />
        </Grid>
        <Grid item xs={3}>
          {/* Right half */}
          <CardContent>
            {/* <Typography variant="h6">Supplements</Typography> */}
            {supplements?.map((supplement) => (
              <Supplement key={supplement.label} {...supplement} />
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CourseItemWithSupplements;
