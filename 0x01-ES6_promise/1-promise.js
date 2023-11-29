export default function getFullResponseFromAPI(success) {
  const obj = {
    status: 200,
    body: 'Success',
  };

  const promise = new Promise((resolve, reject) => {
    if (success === true) {
      resolve(obj);
    }

    if (success === false) {
      const errorObject = new Error('The fake API is not working currently');
      reject(errorObject);
    }
  });

  return promise;
}
