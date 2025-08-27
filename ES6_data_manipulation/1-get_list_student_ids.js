export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) return [];

  const ids = []
  arrayOfObjects.map(element => ids.push(element.id));
  return ids;
}
