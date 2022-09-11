import { BUNGIE_API_KEY } from './config.js';

export const getJSON = async function (url, errorMsg = 'Something went wrong') {
  return fetch(url, {
    headers: {
      'X-API-Key': BUNGIE_API_KEY,
    },
  }).then(response => {
    if (!response.ok)
      // Throw immediately terminates the current function, like return does
      throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

export const postData = async function (url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': BUNGIE_API_KEY,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
};
