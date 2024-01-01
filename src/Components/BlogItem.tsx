import { Box, Paper, Typography, styled, useTheme } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const BlogPaper = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  padding: "20px",
  margin: "30px 0px",
  color: theme.palette.text.secondary,
}));

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
  const theme = useTheme();

  return (
    <BlogPaper elevation={5}>
      <Typography variant="h4">{index + ". " + title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CalendarMonthIcon fontSize="small"/>
        <Typography
          variant="caption"
          sx={{ color: "text.disabled", fontStyle: "italic", marginLeft: 1 }}
        >
          {date.toDateString()}
        </Typography>
      </Box>
      <Box>{content()}</Box>
      <hr style={{ borderColor: theme.palette.divider }} />
    </BlogPaper>
  );
}

export default BlogItem;
