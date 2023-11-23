import Notiflix from 'notiflix';

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

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
