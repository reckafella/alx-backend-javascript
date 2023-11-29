export default function uploadPhoto(filename) {
  const errorObject = new Error(`${filename} cannot be processed`);
  return Promise.reject(errorObject);
}
