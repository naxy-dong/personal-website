import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

function MyTimeline({title, description}: {title: string, description: string}) {
  return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography color="textSecondary">
            {description}
          </Typography>
        </TimelineContent>
      </TimelineItem>
  );
}

export default MyTimeline;
