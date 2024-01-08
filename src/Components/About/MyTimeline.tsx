import Timeline from "@mui/lab/Timeline";
import MyTimelineItem from "./MyTimelineItem";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

const timelineStyle = {
  "& .MuiTimelineContent-root": {
    bgcolor: "action.disabledBackground",
    textAlign: "justify !important",
  },
  // Main content
  "& .MuiTimelineContent-positionAlternate, & .MuiTimelineContent-positionRight":
    {
      borderRadius: 4,
      padding: 3,
      margin: "10px 20px",
    },
  // Opposite content (date)
  "& .MuiTimelineOppositeContent-positionRight": {
    flex: 0.2,
  },
  "& .MuiTimelineOppositeContent-positionAlternate": {
    padding: 3,
    paddingTop: 1,
    margin: "0 20px",
  },
};

function MyTimeline() {
  const theme = useTheme();
  const mediumScreenBreakpoint = theme.breakpoints.values.md;
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= mediumScreenBreakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= mediumScreenBreakpoint);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // effect runs once after the initial render

  return (
    <Timeline
      position={isSmallScreen ? "right" : "alternate"}
      sx={timelineStyle}
    >
      <MyTimelineItem
        title="The other side of the globe"
        date="Dec 2014"
        description="I took the flight to immigrate from China to United States."
      />
      <MyTimelineItem
        title="Brooklyn Technical High School"
        date="Aug 2017"
        description="After 2 years of adjusting to life in the America and honing my English language both in school and in after-school tutoring. I took the SHSAT and obtained a score of 490, barely scraping the passing score for BTHS (Brooklyn Technical High School) of 483. I was one of only two classmates in the ESL class (English as Second Language) who got into a specialized high school."
      />
      <MyTimelineItem
        title="Software engineering major, sort of..."
        date="Aug 2019"
        description="BTHS has a majoring systems that allows students to choose a specialization they want to pursue in their junior to senior year. I was debating whether if I want to pursue a major in software engineering, chemistry, or even accounting. However, after attending the info fair, I decided to choose software engineering major because I admired and resonated with the aspect that you can unleash your creativity to create diverse projects."
      />
      <MyTimelineItem
        title="COVID-19 & The psychology summer project"
        date="Apr 2020 - Jun 2020"
        description="During the COVID lockdown, I joined a team tasked by our web development teacher to create a website for a psychology research experiment in University of Binghamton. It was my first collaborative project. The website simulated the experiment, collecting data from subjects and uploading it to the cloud. Embarrassingly to say, our team later discovered that our program did not meet the experiment specifications, resulting in a loss of around $2000 for the researcher."
      />
      <MyTimelineItem
        title="Stony Brook University"
        date="Aug 2021"
        description="I got into SUNY Stony Brook majoring in Computer Science after receiving the same SAT scores 3 times in a row. Looking back, I regret the option for not attempting to apply to private schools. Therefore, I was determined to make the most out of my college experience."
      />
      <MyTimelineItem
        title="iD Tech"
        date="May 2022 - Aug 2022"
        description="During the summer of my freshman year, I served as a private online instructor, guiding middle to high school students in coding while actively collaborating on a project together. I loved sharing my knowledge to the next generation of passionate computer science students and ended up enjoyed this job so much that I decided to continue working for them in the next two semesters."
      />
      <MyTimelineItem
        title="Teaching assistant"
        date="Aug 2022 - May 2023"
        description="In Fall 2022, I began my teaching journey as a Data Structure & Algorithms (CSE 214) Teaching Assistant in Fall 2022, followed by another role as a Programming Abstraction (CSE 216) Teaching assistant in Spring 2023. I can proudly say that I've made some friends and got to know an entire generation of CS students."
      />
      <MyTimelineItem
        title="Google"
        date="May 2023 - Aug 2023"
        description="With no industry experience and no referrals, never in my life that I would even think that I would have the immense pleasure and privilege of interning at Google. It was a dream come true. Under the guidance of my dedicated and endearing hosts, I gained firsthand experience working in a professional and collaborative environment at a big tech company."
      />
      <MyTimelineItem
        title="West Palm Test Prep"
        date="Sep 2023 - Present"
        description="I am currently working as a front-end developer at West Palm Test Prep developing a website for taking the online SAT."
      />
      <MyTimelineItem
        title="PragSec Lab Research Assistant"
        date="Jan 2023 - Present"
        description="I'm currently a research assistant for the PragSec lab working on the content integrity project."
      />
      <MyTimelineItem
        title="Now"
        date="Present"
        description="I am improving my skills and learning new technologies everyday. Who knows what I'll be doing next? Not even myself."
        isEnd={true}
      />
    </Timeline>
  );
}

export default MyTimeline;
