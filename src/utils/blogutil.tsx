import { Link } from "react-router-dom";
import { Highlight, themes } from "prism-react-renderer";
import { Pre, Line, LineNo, LineContent } from "../Components/Blog/blogCodeBlockStyles";
import { useTheme } from "@mui/material";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function BlogParagraph({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function BlogUnorderedList({ items, title }: { items: any[]; title?: string }) {
  return (
    <>
      {title && <span>{title}</span>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function BlogOrderedList({ items, title }: { items: any[]; title?: string }) {
  return (
    <>
      {title && <span>{title}</span>}
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </>
  );
}

function BlogLink({ text, url }: { text: string; url: string }) {
  return (
    <Link target="_blank" className="blog-link" to={url}>
      <strong>{text}</strong>
    </Link>
  );
}

function BlogImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure style={{ textAlign: "center" }}>
      <img src={src} alt={alt} style={{ maxWidth: "70%" }} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function BlogCodeBlock(text: string, language?: string) {
  const lang = language || "tsx";
  const globalTheme = useTheme();
  const theme =
    globalTheme.palette.mode === "dark"
      ? themes.nightOwl
      : themes.nightOwlLight;

  return (
    <Highlight theme={theme} code={text} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}

function BlogImageSlider(
  src1: string,
  src2: string,
  alt1: string,
  alt2: string,
) {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src={src1} alt={alt1} />}
      itemTwo={<ReactCompareSliderImage src={src2} alt={alt2} />}
    />
  );
}

export {
  BlogParagraph,
  BlogUnorderedList,
  BlogOrderedList,
  BlogLink,
  BlogImage,
  BlogCodeBlock,
  BlogImageSlider,
};
