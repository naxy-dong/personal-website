import { Paper, Typography, styled, useTheme } from "@mui/material";

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
      <Typography
        variant="caption"
        sx={{ color: "text.disabled", fontStyle: "italic" }}
      >
        {date.toDateString()}
      </Typography>
      <div>{content()}</div>
      <hr style={{ borderColor: theme.palette.divider }} />
    </BlogPaper>
  );
}

export default BlogItem;
