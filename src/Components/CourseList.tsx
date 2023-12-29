import courses from "../data/courses";
import CourseItem from "./CourseItem";

function CourseList({ index }: { index: number}) {
    return (
        courses[index].map((course) => (
            <div key={course.id}>
                <CourseItem
                    title={course.title}
                    description={course.description}
                />
            </div>
        ))
    );
}

export default CourseList;
