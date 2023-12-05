export default function getListStudentIds(objectsArr) {
  if (!(objectsArr instanceof Array)) {
    return [];
  }

  return objectsArr.map((object) => object.id);
}
