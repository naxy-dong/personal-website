import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AccordionProps } from "@mui/material/Accordion";
import courses from "../../data/courses";
import BaseCourseItem from "./BaseCourseItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CourseTitle from "./CourseTitle";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

const paperStyle = {
  marginBottom: 2,
};

const MyAccordion = styled((props: AccordionProps) => <Accordion {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&::before": {
      display: "none",
    },
    padding: "15px",
    borderRadius: "15px !important",
  })
);

function CourseList({
  index,
  isCollapsed,
}: {
  index: number;
  isCollapsed?: boolean;
}) {
  // Set initial expanded state to be false for all courses
  const flattenedCourses = courses.flat();
  const initialExpandedState = Object.fromEntries(
    flattenedCourses.map((course) => [course.id, false])
  );
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>(
    initialExpandedState
  );

  // Toggle expanded state for a course
  const handleToggle = (courseId: number) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [courseId]: !prevExpanded[courseId],
    }));
  };

  // Set all accordions to be expanded or collapsed when isCollapsed changes
  useEffect(() => {
    const newExpandedState = Object.fromEntries(
      Object.keys(expanded).map((courseId) => [courseId, !!isCollapsed])
    );
    setExpanded(newExpandedState);
  }, [isCollapsed]);

  return courses[index].map((course) => (
    <MyAccordion
      elevation={5}
      key={course.id}
      sx={paperStyle}
      expanded={expanded[course.id]}
      onChange={() => handleToggle(course.id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <CourseTitle title={course.title} languages={course.languages} />
      </AccordionSummary>
      <AccordionDetails>
        <BaseCourseItem course={course} />
      </AccordionDetails>
    </MyAccordion>
  ));
}

export default CourseList;
