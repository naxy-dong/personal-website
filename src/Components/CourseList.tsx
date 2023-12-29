import { Card } from "@mui/material";
import courses from "../data/courses";
import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";

function CourseList({ index }: { index: number }) {
  return courses[index].map((course) => (
    <Card
      key={course.id}
      variant="outlined"
      sx={{ display: "flex", borderRadius: 3, marginBottom: 2 }}
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
    </Card>
  ));
}

export default CourseList;
