import blogData from "../data/blog";
import BlogItem from "./BlogItem";
import { Container } from "@mui/material";

function BlogList() {
  return (
    <Container>
      {blogData.map((blog, index) => {
        return (
          <div key={index}>
            <BlogItem
              index={blogData.length - index}
              title={blog.title}
              date={blog.date}
              content={blog.content}
            />
          </div>
        );
      })}
    </Container>
  );
}

export default BlogList;
