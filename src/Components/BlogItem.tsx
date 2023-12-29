import { Box, Container, Typography } from "@mui/material";

function BlogItem({
  index,
  title,
  date,
  content,
}: {
  index: number;
  title: string;
  date: Date;
  content: () => JSX.Element;
}) {
  return (
    <Box textAlign="left">
      <Typography variant="h4">{index + ". " + title}</Typography>
      <Typography variant="subtitle2">{date.toDateString()}</Typography>
      <div>{content()}</div>
    </Box>
  );
}

export default BlogItem;
