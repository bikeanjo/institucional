const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD") // decompose accents into separate chars
    .replace(/[\u0300-\u036f]/g, "") // remove accent marks
    .replace(/ç/g, "c") // explicitly replace 'ç' if needed
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanum with dash
    .replace(/^-+|-+$/g, "") // trim dashes from start/end
    .replace(/-{2,}/g, "-"); // collapse multiple dashes;
};

export default slugify;
