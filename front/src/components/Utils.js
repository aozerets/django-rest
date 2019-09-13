export const getCookie2 = () => {
  let coo;
  document.cookie.split(";").forEach((c) => {
    if (c.split('=')[0].trimStart() === 'csrftoken') {
      coo = c.split('=')[1];
    }
  });
  return coo;
};

export const handleErrors = res => {
  if (!res.ok) {
    throw res.json();
  }
  return res;
};

export const Fetch = (url, method='GET', formData=null, headers=null) => {
  return fetch(url, {
    method: method,
    headers: {'X-CSRFToken': getCookie2(), ...headers},
    body: formData
  }).then(handleErrors)
    .then(res => res.json())
};

