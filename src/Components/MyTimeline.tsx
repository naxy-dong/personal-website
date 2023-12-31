import Timeline from "@mui/lab/Timeline";
import MyTimelineItem from "./MyTimelineItem";

function MyTimeline() {
  return (
    <Timeline
      position="alternate"
      sx={{
        "& .MuiTimelineContent-root": {
          bgcolor: "action.disabledBackground",
          textAlign: "justify !important",

        },
        "& .MuiTimelineContent-root, & .MuiTimelineOppositeContent-root": {
          borderRadius: 4,
          padding: 3,
          margin: "0 20px",
        },
      }}
    >
      <MyTimelineItem
        title="The other side of the globe"
        date="Dec 2014"
        description="I had to say goodbye to my elementary friends that I played for 5 years and took the flight to immigrate from China to United States. This is the time that I saw snow for the first time. I fell in love with snow even since."
      />
      <MyTimelineItem
        title="SHSAT Result"
        date="March 2017"
        description="After 2 years of adjusting to United States and learning the English language both in school and in after school tutoring program. I took the SHSAT and got into BTHS (Brooklyn Techincal High School). I got the score of 490, barely scraping the passing score of 483. I was in the ESL class (English as Second Language), the lowest ranking class in my middle school. Only one other classmate in the class got into the specialized high school. In short, my middle school classmates and I went on our own separate paths and sadly I had to say goodbye to most of my friends for the second time."
      />
      <MyTimelineItem
        title="Software engineering major, sort of..."
        date="Aug 2019"
        description="BTHS has a majoring systems that allows students to choose a specialization they want to pursue in their junior to senior year. I was really debating whether if I'm going to be a software engineering major, a chemistry major and hell, even an accounting major. But after attending the major info fair, I decided to choose software engineering major because I really admire the aspect that you can unleash your creativity to create different projects."
      />
      <MyTimelineItem
        title="COVID-19 & The psychology summer project"
        date="Apr 2020 - Jun 2020"
        description="When COVID hits. I'm bored and was looking for something to do. One of my friend, who is asked from our web dev teacher, asked me to join the team to create a website for a psychology research experiment because they could not gather the data in-person due to COVID-19. This is my first project collaborating with other people. The website simulated a psychology experiment that gather data from subject and uploaded in to the cloud. The data is then processed published to the research paper. Embarrassingly to say, we lost the researcher around $2000 when we found out later that our program did not meet the experiment specification."
      />
      <MyTimelineItem
        title="Stony Brook University"
        date="Aug 2021"
        description="I got into SUNY Stony Brook"
      />
      <MyTimelineItem
        title="Online instructor at iD Tech"
        date="May 2022"
        description="I got into SUNY Stony Brook"
      />
      <MyTimelineItem
        title="Data Structure & Programming abstraction teaching assistant"
        date="Aug 2022"
        description="I can proudly say that I've made some friends and got to know an entire generation of CS students."
      />
      <MyTimelineItem
        title="Google"
        date="May 2023 - Aug 2023"
        description="With no industry experience and , never in my life that I would even think that I got into Google as a STEP intern. I can say nothing but awesome things working at Google. And I can see why it's a dream for all software engineers to work at any big tech companies."
      />
      <MyTimelineItem
        title="West Palm Test Prep"
        date="Sep 2023 - Present"
        description="I got into SUNY Stony Brook"
      />
      <MyTimelineItem
        title="Now"
        date="Present"
        description="I am improving my skills and learning new technologies everyday."
        isEnd={true}
      />
    </Timeline>
  );
}

export default MyTimeline;
