import { Paper } from "@mui/material";
import courses from "../data/courses";
import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";
import BaseCourseItem from "./BaseCourseItem";

const paperStyle = {
  padding: "20px",
  display: "flex",
  borderRadius: 3,
  marginBottom: 2,
};

function CourseList({
  index,
  isCollapsed,
}: {
  index: number;
  isCollapsed?: boolean;
}) {
  return courses[index].map((course) => (
    <Paper elevation={5} key={course.id} sx={paperStyle}>
      <BaseCourseItem course={course} isCollapsed={isCollapsed} />
    </Paper>
  ));
}

export default CourseList;
