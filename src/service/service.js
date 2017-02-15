import fetch from 'isomorphic-fetch';

export function callApi({ url, method = 'post', body }) {

  return fetch(url, {
    method: method,
    credentials: 'include',
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => {
      return {
        data,
        responce: true
      }
    })
    .catch(() => {
      return { responce: false }
    })
}