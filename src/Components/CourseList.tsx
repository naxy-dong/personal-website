import courses from "../data/courses";
import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";

function CourseList({ index }: { index: number }) {
  return courses[index].map((course) => (
    <div key={course.id}>
      {course.supplements ? (
        <CourseItemWithSupplements
          title={course.title}
          description={course.description}
          supplements={course.supplements}
        />
      ) : (
        <CourseItem title={course.title} description={course.description} />
      )}
    </div>
  ));
}

export default CourseList;
