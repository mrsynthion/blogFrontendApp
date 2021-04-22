export const tagsToArray: (tags: string) => Array<string> = (tags: string) => {
  const Tags = tags.split(',');
  return Tags;
};
