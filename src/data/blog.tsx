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
    date: new Date(2023, 11, 29),
    content: () => {
      const htmlContent = `
          Sometimes stackoverflow is better find . -name '*' | xargs wc -l
        `;

      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    },
  },
  {
    title: "The humble beginnings",
    date: new Date(2023, 11, 28),
    content: () => {
      const taijiBlogLink = makeLink(
        "Taiji's blog",
        "https://taiji-game.com/blog/"
      );
      const htmlContent = `
        ${makeParagraph(`Today I've decided that I'll develop my own website out of boredom.
        During the development of my website, I want to make a development
        blog for everything I do, including design decisions, showcase some
        of the interesting code, and things I've learned. The layout is heavily inspired by the game taiji, which the independent creator has ${taijiBlogLink} documenting the progress and updates of the game.`)}
        ${makeParagraph(`For my project, I want to make my website special and ambitious. My
        idea is to make each page contain a unique mechanic for navigation
        while maintaining the fun experience for the user. But that's for later. For now, I want to make a simple website that looks similar to other people and later put my own spin to it.`)}
        ${makeParagraph(
          `Another goal for this personal website is for me to learn TypeScript. I've always heard the controversy that TypeScript is better than Vanilla JavaScript, but I've never tried it myself.`
        )}
        ${makeList(
          ["Home", "About Me", "Courses", "Blog", "Contact", "CV"],
          "Here's a list of pages I want to make:"
        )}
          ${makeImage(
            assetPath + "day1.png",
            "Website look on day 1.",
            "Website look on day 1."
          )}
        `;

      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    },
  },
];

export default blogData;
