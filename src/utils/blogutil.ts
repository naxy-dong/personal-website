function makeParagraph(text: string) {
  // return text
  //   .split("\n")
  //   .map((paragraph) => `<p>${paragraph}</p>`)
  //   .join("");

  return `<p>${text}</p>`;
}

function makeList(items: any[], title?: string) {
  return `
    ${title ? `<span>${title}</span>` : ""}
    <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function makeLink(text: string, url: string) {
  return `<a target="_blank" href="${url}">${text}</a>`;
}

function makeImage(url: string, alt: string, caption?: string) {
  return `<figure style="text-align: center;">
            <img src="${url}" alt="${alt}" style="max-width: 70%;">
            ${caption ? `<figcaption>${caption}</figcaption>` : ""}
        </figure>`;
}

export { makeParagraph, makeList, makeLink, makeImage };
