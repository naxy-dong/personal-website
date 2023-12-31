import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import MyTimelineItem from "./MyTimelineItem";

function MyTimeline() {
  return (
    <Timeline
      position="alternate"
      sx={{
        "& .MuiTimelineContent-root": {
          borderRadius: 1,
          marginTop: 1,
          bgcolor: "action.disabledBackground",
          height: "100%",
        },
      }}
    >
      <MyTimelineItem
        title="How it began"
        description="Software engineering major in high school"
      />
      <MyTimelineItem
        title="How it began"
        description="Software engineering major in high school"
      />
      <MyTimelineItem
        title="How it began"
        description="Software engineering major in high school"
      />  
      <MyTimelineItem
        title="How it began"
        description="Software engineering major in high school"
      />

      {/* The last item */}
      <TimelineItem sx={{ minHeight: "auto" }}>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
        </TimelineSeparator>
        <TimelineContent>Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default MyTimeline;
