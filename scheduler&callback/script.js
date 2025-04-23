

// addEventListener('click', () => { //this is an example for call back function bcoz it has one func inside another func
//     console.log('hi')
// })



//schedulers-used to schedule the execution of call-back functions
// setInterval() - clearInterval()  , setTimeout() - clearTimeout() ==> these are the two schedulers
let count = 1
setInterval(() => {
    console.log(count = count + 1)
}, 1000)


