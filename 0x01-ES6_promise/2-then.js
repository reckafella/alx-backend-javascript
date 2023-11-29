export default function handleResponseFromAPI(promise) {
  const response = 'Got a response from the API';

  return promise
  // eslint-disable-next-line no-unused-vars
    .then((result) => {
      console.log(response);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error) => {
      console.error(response);
    });
}
