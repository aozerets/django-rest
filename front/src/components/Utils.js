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
    throw Error(res.statusText);
  }
  return res;
};
