// Q4. Implement a function sum() in the following way such that it gives the sum of two numbers

function sum(a) {
    return function(b){
      return a+b;
    }
  }
  
  console.log(sum(10)(2));