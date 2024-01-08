import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";

function BaseCourseItem({ course }: { course: Course }) {
  return course.supplements ? (
    <CourseItemWithSupplements
      title={course.title}
      description={course.description}
      supplements={course.supplements}
      languages={course.languages}
    />
  ) : (
    <CourseItem
      title={course.title}
      description={course.description}
      languages={course.languages}
    />
  );
}

export default BaseCourseItem;
