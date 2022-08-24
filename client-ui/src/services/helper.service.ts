export const stringHasEmptyChar = (s: string) => {
  const charArr = s.split('');
  const unique = new Set(charArr);
  const strUniqueChar = Array.from(unique);
  return strUniqueChar.indexOf(' ') !== -1;
};
