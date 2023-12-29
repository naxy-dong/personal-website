import {
  makeParagraph,
  makeList,
  makeLink,
  makeImage,
} from "../utils/blogutil";

const assetPath = "src/assets/";
const blogData = [
  {
    title: "I want to try out something new",
    date: new Date(2023, 11, 28),
    content: () => {
      const htmlContent = `
        ${makeParagraph(`Today I've decided that I'll develop my own website out of boredom.
        During the development of my website, I want to make a development
        blog for everything I do, including design decisions, showcase some
        of the interesting code, and things I've learned.`)}
        ${makeParagraph(`I want to make my website special and some would say ambitious. My
        idea is to make each page contain a unique mechanic for navigation
        while maintaining the fun experience for the user. Here is About Me
        page: I want to list my journey.`)}
          ${makeImage(
            assetPath + "day1.png",
            "Website look on day 1.",
            "Website look on day 1."
          )}
        `;

      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    },
  },

  {
    title: "I want to try out something new",
    date: new Date(11, 28, 2023),
    content: () => {
      const htmlContent = `
          <p>
            Today I've decided that I'll develop my own website out of boredom.
            During the development of my website, I want to make a development
            blog for everything I do, including design decisions, showcase some
            of the interesting code, and things I've learned.
          </p>
          <p>
            I want to make my website special and some would say ambitious. My
            idea is to make each page contain a unique mechanic for navigation
            while maintaining the fun experience for the user. Here is About Me
            page: I want to list my journey.
          </p>
        `;

      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    },
  },
];

export default blogData;
