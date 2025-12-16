export const getTasksTextWithHighlightedKeyword = (
  text: string,
  keyword: string[] | []
) => {
  if (keyword.length > 0) {
    const escaped = keyword.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    const regex = new RegExp(escaped.join("|"), "gi");
    return text.replace(
      regex,
      match => `<span class="text-AAsecondary">${match}</span>`
    );
  }
  return text;
};
