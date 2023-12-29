import React from "react";
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
              index={index + 1}
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
