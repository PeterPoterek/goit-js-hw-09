import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    return new Promise((resolve, reject) => {
      resolve({ position, delay });
    });
  } else {
    return new Promise((resolve, reject) => {
      reject({ position, delay });
    });
  }
}

const handleFormSubmit = e => {
  e.preventDefault();

  const delay = e.target.elements.delay.value;
  const step = e.target.elements.step.value;
  const amount = e.target.elements.amount.value;

  for (let i = 1; i <= amount; i++) {
    setTimeout(() => {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    }, delay);
  }
};

form.addEventListener('submit', handleFormSubmit);
