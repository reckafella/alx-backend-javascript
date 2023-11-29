export default function handleResponseFromAPI(promise) {
  const response = 'Got a response from the API';
  const obj = {
    status: 200,
    body: 'success',
  };
  const errorObject = new Error();

  return promise
    .then(() => obj)
    .catch(() => errorObject)
    .finally(() => console.log(response));
}
