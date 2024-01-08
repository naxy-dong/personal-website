import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function MyTimeline({
  title,
  date,
  description,
  isEnd,
}: {
  title: string;
  date: string;
  description: string;
  isEnd?: boolean;
}) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" color="primary" />
        {!isEnd && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6" component="span">
          {title}
        </Typography>
        <Typography color="textSecondary">{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default MyTimeline;
