export const getTagToBegin = (tag: string, tags: string[]) => {
  const tagToBegin = tags.filter((item) => item !== tag);
  tagToBegin.unshift(tag);
  return tagToBegin;
};