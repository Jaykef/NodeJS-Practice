// Jaykef - Jaward Sesay
// A Promise is a JavaScript object that links "Producing Code" 
// and "Consuming Code".

// Example 1
function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
  }

  let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

  promise.then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: ${error.message}`)
  );

promise.then(script => console.log('Another handler...'));

// Example 2
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve("Done"), ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));

