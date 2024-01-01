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
    <a target="_blank" className="blog-link" href={url}>
      <strong>{text}</strong>
    </a>
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

export {
  BlogParagraph,
  BlogUnorderedList,
  BlogOrderedList,
  BlogLink,
  BlogImage,
};
