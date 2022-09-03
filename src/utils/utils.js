export const shortenString = (str) => {
  if (str === null) return;
  return str.length > 12 ? str.slice(0, 11) + "...." : str;
};
