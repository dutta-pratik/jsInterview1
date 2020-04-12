//Q7. Give a relevant example of Promises

Example of LoadScript

Here’s the callback-based variant of LoadScript

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}

Let’s rewrite it using Promises.

The new function loadScript will not require a callback. 
Instead, it will create and return a Promise object that resolves when the loading is complete.

function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;
  
      script.onload = () => resolve(script);
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
  
      document.head.append(script);
    });
}