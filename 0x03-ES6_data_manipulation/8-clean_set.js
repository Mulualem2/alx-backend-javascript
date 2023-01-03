export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) {
    return res;
  }
  set.forEach((element) => {
    if (element && element.startsWith(startString)) {
      res += `${element.slice(startString.length)}-`;
    }
  });
  return res.slice(0, res.length - 1);
}
