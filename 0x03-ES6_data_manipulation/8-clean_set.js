export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  set.forEach((index) => {
    if (index && index.startsWith(startString)) result += `${index.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}
