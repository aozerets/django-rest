// Prepare the body tag by adding a "js-paused" class
document.body.className += " js-loading";

const handleErrors = res => {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  return res;
};

const courseSigning = (ev) => {
  document.getElementById('myModal').style.display = "block";
};

const closeModal = (ev) => {
  document.getElementById('myModal').style.display = "none";
};

const highlightOption = (ev) => {
  if (ev.type === 'mouseenter') {
    ev.currentTarget.classList.add('highlighted')
  } else {
    ev.currentTarget.classList.remove('highlighted');
  }
};

const showPage = () => {
  // Remove the "js-paused" class
  const programs = document.getElementById('allprogramsContainer');
  fetch('/api/v1/programs/', {
    method: 'GET'
  }).then(handleErrors)
    .then(res => res.json())
    .then(res => {
      const lastIndex = res.length;
      for (let i = 0; i < lastIndex; i++) {
        const newProgram = `<div class="course-card course-card__${res[i].title.toLowerCase()} animate-card-in option">
            <h2 class="course-card__title">${res[i].title}</h2>
            <h4 class="course-card__more-info">Starting ${res[i].start}!!!!</h4>
            <p class="course-card__more-info">${res[i].description}!</p>
            <p class="course-card__action"><a class="button" href="#">Sign it</a></p>
        </div>`;
        programs.insertAdjacentHTML('afterbegin', newProgram);
      }
      document.querySelectorAll('.option').forEach ((e) => {
        e.addEventListener("mouseenter", highlightOption, false);
        e.addEventListener("mouseleave", highlightOption, false)
      });
      document.querySelectorAll('.course-card__action').forEach ((e) => {
        e.addEventListener('click', courseSigning,false);
      });
      document.getElementById('close').addEventListener('click', closeModal ,false);
      document.body.className = document.body.className.replace("js-loading","");
    });
};

window.addEventListener("load", showPage, false);
// Listen for when everything has loaded

