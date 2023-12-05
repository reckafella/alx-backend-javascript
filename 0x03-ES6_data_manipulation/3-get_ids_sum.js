export default function getStudentIdsSum(objectsArr) {
  if (!(objectsArr instanceof Array)) {
    throw new TypeError('argument must be an array of objects');
  }

  return objectsArr.reduce((acc, object) => acc + object.id, 0);
}
