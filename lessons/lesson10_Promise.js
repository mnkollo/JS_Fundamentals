//promise - a promise is an object that may produce a single value some time in the future
// a promise is like a promise in real life, that you will do something in the future

let promise = new Promise((resolve, reject) => {  //resolve and reject are functions
    let a = 1 + 1
    if(a === 2) {
        resolve('Promise Fulfilled')
    } else {
        reject('Promise not fulfilled')
    }
})

promise.then((message) => {                        //then returns a promise
    console.log(message + ', promise has passed!')
}).catch((message) => {
    console.log(message + ', promise has failed')
})

