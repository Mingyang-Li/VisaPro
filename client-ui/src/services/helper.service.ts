export const stringHasEmptyChar = (s: string) => {
  const charArr = s.split('');
  const unique = new Set(charArr);
  const strUniqueChar = Array.from(unique);
  return strUniqueChar.indexOf(' ') !== -1;
};

export const numDatesBetweenTwoDates = (d1: Date, d2: Date) => {
  const diffTime = d2.getTime() - d1.getTime();
  const daysDiff = diffTime / (1000 * 3600 * 24);
  return Math.abs(Math.round(daysDiff));
};
