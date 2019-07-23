import './index.scss';

const getCookie2 = () => {
  let coo;
  document.cookie.split(";").forEach((c) => {
    if (c.split('=')[0].trimStart() === 'csrftoken') {
      coo = c.split('=')[1];
    }
  });
  return coo;
};

const handleErrors = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

document.forms['registrationForm'].addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  fetch('/rest-auth/registration/', {
    method: 'POST',
    headers: {'X-CSRFToken': getCookie2()},
    body: formData
  }).then(response => response.json())
    .then(res => {
      if ('key' in res) {
        document.getElementById('registerContainer').setAttribute('hidden', 'true');
      } else {
        Object.entries(res).forEach((er) =>{
          document.getElementById(`${er[0]}Error`).removeAttribute('hidden');
          document.getElementById(`${er[0]}Error`).innerText = er[1].join('\n');
          setTimeout(() => {
            document.getElementById(`${er[0]}Error`).setAttribute('hidden', 'true');
          }, 3000);
        });
      }
    });
});

document.forms['loginForm'].addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  fetch('/rest-auth/login/', {
    method: 'POST',
    headers: {'X-CSRFToken': getCookie2()},
    body: formData
  }).then(handleErrors)
    .then(() => window.location.href="/frontend/components/allprograms.html")
    .catch(() => {
      document.getElementById('loginError').removeAttribute('hidden');
      setTimeout(() => {
        document.getElementById('loginError').setAttribute('hidden', 'true');
      }, 1000);
    });
});

document.getElementById('registerNav').addEventListener('click', () =>{
  document.getElementById('loginContainer').setAttribute('hidden', 'true');
  document.getElementById('registerContainer').removeAttribute('hidden');
})

document.getElementById('loginNav').addEventListener('click', () =>{
  document.getElementById('registerContainer').setAttribute('hidden', 'true');
  document.getElementById('loginContainer').removeAttribute('hidden');
})