import {
  BlogParagraph,
  BlogUnorderedList,
  BlogOrderedList,
  BlogLink,
  BlogImage,
} from "../utils/blogutil";

const assetPath = "src/assets/";

const blogData = [
  {
    title: "More icons!",
    date: new Date(2024, 0, 1),
    content: () => {
      return (
        <>
          <BlogParagraph>
            Just a quick one for the new years. I added icons from the devicon
            library for each courses that contains any programming languages
            I've used in the course.
          </BlogParagraph>
          <BlogImage
            src={assetPath + "day5-1.png"}
            alt="Icons in the courses page."
            caption="Icons in the courses page."
          />
        </>
      );
    },
  },
  {
    title: "AboutMe page + icons.",
    date: new Date(2023, 11, 31),
    content: () => {
      const blogTodoList = (
        <BlogOrderedList
          items={[
            "markdown to HTML converter",
            "code block",
            "Before and after image slider",
            "Make each blog be linkable",
          ]}
          title="Blog Page"
        />
      );

      const coursesTodoList = (
        <BlogOrderedList
          items={[
            "a tag filtering system?",
            "A compact mode to avoid scrolling",
            "icons for any programming language used in the course",
            "Fix the TA section",
          ]}
          title="Courses Page"
        />
      );

      return (
        <>
          <BlogParagraph>
            When I first start making this project, I have a rough idea of what
            to put in each section. However, I really don't know what to put in
            the AboutMe page and the home page. After Taking "inspirations" from
            other people (God I love this quote). I've decided to do a timeline
            of my journey to the about me page. And the image below is how it
            turned out.
          </BlogParagraph>
          <BlogImage
            src={assetPath + "day4-1.png"}
            alt="Timeline of my journey on the AboutMe page."
            caption="Timeline of my journey on the AboutMe page."
          />
          <BlogParagraph>
            I've also added more icons and added some useless content for my
            contact page. Check this out!
          </BlogParagraph>
          <BlogImage
            src={assetPath + "day4-2.png"}
            alt="This is my contact page on day 4."
            caption="This is my contact page on day 4."
          />
          <BlogUnorderedList
            items={[
              "Home page - what to put there? So far I would like to put all my featured work and highlights.",
              coursesTodoList, // Assuming coursesTodoList is defined elsewhere
              blogTodoList, // Assuming blogTodoList is defined elsewhere
              "Website color scheme",
              "CV - Should I post it or not?",
            ]}
            title="Here's my todo list & series of questions to answer"
          />
        </>
      );
    },
  },
  {
    title: "AHHHH MY EYES",
    date: new Date(2023, 11, 30),
    content: () => {
      const modeLink = (
        <BlogLink
          text="dark/light mode"
          url="https://mui.com/material-ui/customization/dark-mode/"
        />
      );
      const CSSBaseLineLink = (
        <BlogLink
          text="CSSBaseLine"
          url="https://mui.com/material-ui/react-css-baseline/"
        />
      );
      const prismReactRendererLink = (
        <BlogLink
          text="prism-react-renderer"
          url="https://www.npmjs.com/package/prism-react-renderer"
        />
      );

      return (
        <>
          <BlogParagraph>
            Day 3 of development. I stumbled upon the {modeLink} in MUI doc and
            couldn't resist trying it out. One irritating problem I encountered
            is that the background color of the website would not change when I
            toggle the dark mode. It turns out the App.css is overriding the
            background color by a constant that's not within the theme of MUI. I
            tried useEffect from React and it did the trick. But I later found
            out that MUI has a {CSSBaseLineLink} component that automatically
            sets the background color.
          </BlogParagraph>

          <BlogImage
            src={assetPath + "day3-1.png"}
            alt="The website look on dark mode."
            caption="The website look on dark mode."
          />

          <BlogImage
            src={assetPath + "day3-2.png"}
            alt="The website look on light mode."
            caption="The website look on light mode."
          />

          <BlogParagraph>
            It's not fully dynamic, and lots of colors are hardcoded. But it's a
            start. I will be thinking of making a custom theme in the future for
            both the light mode and the dark mode.
          </BlogParagraph>

          <BlogParagraph>
            One functionality I want to add to the blog is to render a code
            block. I've found a package called {prismReactRendererLink} that can
            do the job. But I will do more investigation on this and see if
            there's a better option.
          </BlogParagraph>

          <BlogParagraph>
            It's kinda of a pain to write the blog in HTML. Only if there's a
            built-in markdown to HTML converter I can use in React.
          </BlogParagraph>

          <BlogParagraph>
            Overall, the codebase is growing rapidly. From 600 lines of code on
            day 1 to 1220 lines of code currently. I don't think I'm writing
            spaghetti code. So that's a good thing, I guess. After looking at
            the output of the command{" "}
            <code>find . -name '*' | xargs wc -l</code>, I realized that the
            assets folder is taking up a lot of lines, and they're mostly
            images. So I used{" "}
            <code>find . -name '*' | grep -v '/assets/' | xargs wc -l</code> to
            exclude the assets folder.
          </BlogParagraph>
        </>
      );
    },
  },
  {
    title: "Speedy progress",
    date: new Date(2023, 11, 29),
    content: () => {
      return (
        <>
          <BlogParagraph>
            Day 2 of development. I've made a lot of progress today. I finished
            the courses page that can list my courses I've taken throughout my
            college career. I also spent quite some time uploading my work to
            GitHub so that I can have my work ready on the cloud. I don't want
            to incentivize people committing academic dishonesty, so I've made
            most of my repositories private.
          </BlogParagraph>

          <BlogImage
            src={assetPath + "day2-1.png"}
            alt="This is my courses page."
            caption="This is my courses page."
          />

          <BlogParagraph>
            My next step for the courses page would be some sort of filtering
            system (like a search function or modes) so that the information
            presented would not overwhelm the user. I'll have to think about the
            specifics and how to implement that.
          </BlogParagraph>

          <BlogParagraph>
            I've touched up the appearances for the blog page. Although this is
            a rough draft, I like how it turned out at the moment. One nitpick I
            have is that the blog page (or the entire website) should have a
            better font style. I'll have to look into that.
          </BlogParagraph>

          <BlogImage
            src={assetPath + "day2-2.png"}
            alt="This is my blog page."
            caption="This is my blog page."
          />

          <BlogParagraph>
            The contact page is also finished. The link to each of my socials is
            very simple. However, icons took a while to implement. I thought I
            could use the Material-UI icons, but I couldn't find the Discord
            icon. I had to use FontAwesome for that. And even after I used the
            FontAwesome icon and integrated it with Material-UI, the icon was
            too small. I had to use the style property to make the icon bigger.
          </BlogParagraph>

          <BlogImage
            src={assetPath + "day2-3.png"}
            alt="This is my contact page."
            caption="This is my contact page."
          />

          <BlogParagraph>
            Key to self: sometimes Stack Overflow is better. Use this command{" "}
            <code>find . -name '*' | xargs wc -l`</code> to count the number of
            lines in a directory.
          </BlogParagraph>
        </>
      );
    },
  },
  {
    title: "The humble beginnings",
    date: new Date(2023, 11, 28),
    content: () => {
      const taijiBlogLink = (
        <BlogLink text="Taiji's blog" url="https://taiji-game.com/blog/" />
      );

      return (
        <>
          <BlogParagraph>
            After 4 days of intense gaming with the new games I bought during
            Christmas, today I've decided that I'll develop my own website out
            of boredom. During the development of my website, I want to blog a
            development blog for everything I do, including design decisions,
            showcase some of the interesting code, and things I've learned. The
            layout is heavily inspired by the game Taiji, which the independent
            creator has {taijiBlogLink} documenting the progress and updates of
            the game.
          </BlogParagraph>

          <BlogParagraph>
            For my project, I want to make my website special and ambitious. My
            idea is to make each page contain a unique mechanic for navigation
            while maintaining the fun experience for the user. But that's for
            later. For now, I want to make a simple website that looks similar
            to other people and later put my own spin to it.
          </BlogParagraph>

          <BlogParagraph>
            Another goal for this personal website is for me to learn
            TypeScript. I've always heard the controversy that TypeScript is
            better than Vanilla JavaScript, but I've never tried it myself.
          </BlogParagraph>

          <BlogUnorderedList
            items={["Home", "About Me", "Courses", "Blog", "Contact", "CV"]}
            title="Here's a list of pages I want to make:"
          />

          <BlogImage
            src={assetPath + "day1.png"}
            alt="Website look on day 1."
            caption="Website look on day 1."
          />
        </>
      );
    },
  },
];

export default blogData;
