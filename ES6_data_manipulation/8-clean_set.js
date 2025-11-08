export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const filtered = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      filtered.push(value.slice(startString.length));
    }
  });

  return filtered.join('-');
}
