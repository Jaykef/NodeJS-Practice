// Jaykef - Jaward Sesay
// multiple promises

function promiseAll(promises) {
  const outputs = [];
  let resolvedPromiseCounter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise.then((value) => {
        outputs[i] = value;
        resolvedPromiseCounter++;
        if (resolvedPromiseCounter === promises.length) {
          resolve(outputs);
        }
      })
        .catch(reject);
    });
  });
}

const slowPromise = new Promise((res) => {
  setTimeout(() => res('done'), 100);
})

const promises = [
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.reject(3),
  Promise.resolve('resolve'),
  slowPromise
];

promiseAll(promises).then(console.log);
