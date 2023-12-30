import {
  makeParagraph,
  makeList,
  makeLink,
  makeImage,
} from "../utils/blogutil";

const assetPath = "src/assets/";

const blogData = [
  {
    title: "AHHHH MY EYES",
    date: new Date(2023, 11, 29),
    content: () => {
      const useMemoLink = makeLink(
        "useMemo",
        "https://react.dev/reference/react/useMemo"
      );
      const darkModeLink = makeLink(
        "dark mode",
        "https://mui.com/material-ui/customization/dark-mode/"
      );
      const htmlContent = `
        ${makeParagraph(
          "Day 3 of development. I stumbled upon the dark/light mode in MUI doc and couldn't resist to trying it out."
        )}
        ${makeImage(
          assetPath + "day2-3.png",
          "This is my contact page.",
          "This is my contact page."
        )}

        ${makeParagraph(
          `Key to self: sometimes stackoverflow is better. Use this command find . -name '*' | xargs wc -l to count the number of lines in a directory.`
        )}
        `;

      return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    },
  },
  {
    title: "Speedy progress",
    date: new Date(2023, 11, 29),
    content: () => {
      const htmlContent = `
        ${makeParagraph(
          `Day 2 of development. I've made a lot of progress today. I finished the courses page that can list my courses I've took throughout the my college career. I also spend quite some time uploading my work to github so that I can have my work ready on the cloud. I don't want to incentivize people committing academic dishonesty, so I've made most of my repositories private.`
        )}
        ${makeImage(
          assetPath + "day2-1.png",
          "This is my courses page.",
          "This is my courses page."
        )}
        ${makeParagraph(
          `My next step for the courses page would be some sort of filtering system (like a search function or modes) so that the information presented would not overwhelm the user. I'll have to think about the specifics and how to implement that.`
        )}
        ${makeParagraph(
          `I've touched up the appearances for the blog page. Although this is a rough draft, I like how it turned out at the moment. One nitpick I have is that the blog page (or the entire website) should have better font style. I'll have to look into that.`
        )}
        ${makeImage(
          assetPath + "day2-2.png",
          "This is my blog page.",
          "This is my blog page."
        )}
        ${makeParagraph(
          `The contact page is also finished. The link to each of my socials are very simple. However icons took a while to implement. I thought I could use the material-ui icons, but I couldn't find the discord icon. I had to use fontawesome for that. And even after I used the fontawesome icon and integrated it with material-ui, the icon was too small. I had to use the style property to make the icon bigger.`
        )}
        ${makeImage(
          assetPath + "day2-3.png",
          "This is my contact page.",
          "This is my contact page."
        )}

        ${makeParagraph(
          `Key to self: sometimes stackoverflow is better. Use this command find . -name '*' | xargs wc -l to count the number of lines in a directory.`
        )}
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
        ${makeParagraph(`After 4 days of intense gaming with the new games I bought during Christmas, today I've decided that I'll develop my own website out of boredom.
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
