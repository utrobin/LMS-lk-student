import fetch from 'isomorphic-fetch';

export function callApi(url) {
  return fetch(url, {
    method: 'post',
    credentials: 'include',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
  })
    .then(response => { return response.json() })
    .then(data => {
      return {
        data,
        responce: true
      }
    })
}