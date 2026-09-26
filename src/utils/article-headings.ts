/** The layout owns h1. Shift compiled Markdown headings without changing text or IDs. */
export function shiftArticleHeadings(html: string) {
  return html.replace(
    /<(\/?)h([1-6])(?=[\s>])/g,
    (_tag, closing: string, level: string) =>
      `<${closing}h${Math.min(6, Number(level) + 1)}`,
  );
}
