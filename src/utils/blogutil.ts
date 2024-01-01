function makeParagraph(text: string) {
  // return text
  //   .split("\n")
  //   .map((paragraph) => `<p>${paragraph}</p>`)
  //   .join("");

  return `<p>${text}</p>`;
}

function makeList(items: any[], title?: string, ordered?: boolean) {
  return `
    ${title ? `<span>${title}</span>` : ""}
    ${ordered ? "<ol>" : "<ul>"} 
    ${items
      .map((item) => {
        if(item.startsWith("<")){
          return item;
        }
        return `<li>${item}</li>`;
      })
      .join("")}
    ${ordered ? "</ol>" : "</ul>"}
  `;
}

function makeLink(text: string, url: string) {
  return `<a target="_blank" class="blog-link" href="${url}"><strong>${text}</strong></a>`;
}

function makeImage(url: string, alt: string, caption?: string) {
  return `<figure style="text-align: center;">
            <img src="${url}" alt="${alt}" style="max-width: 70%;">
            ${caption ? `<figcaption>${caption}</figcaption>` : ""}
        </figure>`;
}

export { makeParagraph, makeList, makeLink, makeImage };
