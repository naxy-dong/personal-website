import { Paper, styled } from "@mui/material";
import courses from "../data/courses";
import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";

const CoursePaper = styled(Paper)(({ theme }) => ({
  padding: "20px",
  display: "flex",
}));

function CourseList({ index }: { index: number }) {
  return courses[index].map((course) => (
    <CoursePaper
      elevation={5}
      key={course.id}
      sx={{ borderRadius: 3, marginBottom: 2 }}
    >
      {course.supplements ? (
        <CourseItemWithSupplements
          title={course.title}
          description={course.description}
          supplements={course.supplements}
        />
      ) : (
        <CourseItem title={course.title} description={course.description} />
      )}
    </CoursePaper>
  ));
}

export default CourseList;
