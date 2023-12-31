import { Paper } from "@mui/material";
import courses from "../data/courses";
import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";

const paperStyle = {
  padding: "20px",
  display: "flex",
  borderRadius: 3,
  marginBottom: 2,
};

function CourseList({ index }: { index: number }) {
  return courses[index].map((course) => (
    <Paper elevation={5} key={course.id} sx={paperStyle}>
      {course.supplements ? (
        <CourseItemWithSupplements
          title={course.title}
          description={course.description}
          supplements={course.supplements}
        />
      ) : (
        <CourseItem title={course.title} description={course.description} />
      )}
    </Paper>
  ));
}

export default CourseList;
