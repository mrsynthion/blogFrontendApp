export const textToArray: (tags: string, Split: string) => Array<string> = (
  tags: string,
  Split: string
) => {
  const Text = tags.split(Split);
  return Text;
};
