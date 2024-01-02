import Grid from "@mui/material/Grid";
import CourseItem from "./CourseItem";
import Supplement from "./Supplement";
import { Box } from "@mui/material";

const leftItemStyle = { paddingRight: "16px" };

function CourseItemWithSupplements({
  title,
  description,
  supplements,
  languages,
}: {
  title: string;
  description: string;
  supplements?: { label: string; link: string }[];
  languages?: string[];
}) {
  return (
    <Grid container>
      <Grid item sx={leftItemStyle} sm={12} md={9}>
        <CourseItem title={title} description={description} languages={languages} />
      </Grid>
      <Grid item sm={12} md={3}>
        <Box>
          {supplements?.map((supplement) => (
            <Supplement key={supplement.label} {...supplement} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default CourseItemWithSupplements;
