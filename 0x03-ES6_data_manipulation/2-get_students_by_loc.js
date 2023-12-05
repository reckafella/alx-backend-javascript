export default function getStudentsByLocation(objectsArr, city) {
  if (!(objectsArr instanceof Array)) {
    throw new TypeError('first argument must be an array of objects');
  }

  if (typeof city !== 'string') {
    throw new TypeError('second argument must be a string');
  }

  return objectsArr.filter((object) => object.location === city);
}
