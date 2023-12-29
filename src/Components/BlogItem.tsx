import { Paper, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "left",
  padding: "20px",
  margin: "30px 0px",
  color: theme.palette.text.secondary,
  //   ...theme.typography.body2,
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
  return (
    <Item elevation={5}>
      <Typography variant="h4">{index + ". " + title}</Typography>
      <Typography
        variant="caption"
        style={{ color: "#9a9a9a", fontStyle: "italic" }}
      >
        {date.toDateString()}
      </Typography>
      <div>{content()}</div>
      <hr style={{ borderColor: "dimgray" }} />
    </Item>
  );
}

export default BlogItem;
