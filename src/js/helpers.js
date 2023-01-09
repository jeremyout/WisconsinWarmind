import { BUNGIE_API_KEY } from './config.js';

// https://bungie-net.github.io/multi/schema_BungieMembershipType.html
export const MembershipType = {
  none: 0,
  xbox: 1,
  psn: 2,
  steam: 3,
  blizzard: 4,
  stadia: 5,
  epic: 6,
  bungie: 254,
  all: -1,
};

// https://bungie-net.github.io/multi/schema_Destiny-DestinyClass.html#schema_Destiny-DestinyClass
export const ClassById = {
  0: 'Titan',
  1: 'Hunter',
  2: 'Warlock',
};
export const ClassByString = {
  Titan: 0,
  Hunter: 1,
  Warlock: 2,
};

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
