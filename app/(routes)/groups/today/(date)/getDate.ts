export const getDate = (): string => {
  let date = new Date();
  return date.toDateString();
};
