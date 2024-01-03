import CourseItem from "./CourseItem";
import CourseItemWithSupplements from "./CourseItemWithSupplements";
import CourseTitle from "./CourseTitle";

function BaseCourseItem({
  course,
  isCollapsed,
}: {
  course: Course;
  isCollapsed?: boolean;
}) {
  if (isCollapsed) {
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
  } else {
    return <CourseTitle title={course.title} languages={course.languages} />;
  }
}

export default BaseCourseItem;
