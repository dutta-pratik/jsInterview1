//Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples

Async and Await are extensions of promises.
An async function can contain an await expression that pauses the execution of the async function and waits for 
the passed Promise's resolution, and then resumes the async function's execution and returns the resolved value. 
Remember, the await keyword is only valid inside async functions.
async await makes it much more easier to use promises.
async await generally means you are doing things in sequential way.

Following are some point why we use Aync and Await

ErrorHandling: 
async/await makes it relatively easy to handle both synchronous and asynchronous errors.
const oddRequest = () => {
    try {
    getJSON()
        .then(result => {
        // this parse may fail
        const data = JSON.parse(result)
        console.log(data)
        })
        //  handle asynchronous errors
        .catch((err) => {
        console.log(err)
        })
    } catch (err) {
    console.log(err)
    }
}
In this promise example, the try/catch will not handle the error if JSON.parse fails. 
This is because it’s happening inside a promise. 
Hence, we need to call .catch on the promise, this will be more sophisticated than console.log in production-ready code. 

Conditionals:
async/await handles conditionals in a much better fashion as compared to using Promises. Often times, 
we want to fetch some data and then decide whether it should return that fetched data or get more 
data(make another call for more data) based on some value in the initially fetched data. Example
const getNumbers = () => {
    return getJSON()
      .then(firstNumber=> {

      /*we can return "firstNumber" but then it needs an even number 
      so we'd make another call to return an even number then return it*/

        if (secondNumber.requiresEvenNumber) {
          return getEvenNumber(firstNumber)
            .then(secondNumber=> {
              console.log(secondNumber)
              return secondNumber
            })
        } else {
          console.log(firstNumber)
          return firstNumber
        }
      })
  }
  this could get complicated and confusing as we go on with values that require other values, 
  however, async/await makes it really simple to handle:
  const getNumbers = async () => {
    const firstNumber = await getJSON()
    if (firstNumber.requiresEvenNumber) {
      const secondNumber = await getEvenNumber(data);
      console.log(secondNumber)
      return secondNumber
    } else {
      console.log(firstNumber)
      return firstNumber    
    }
  }


