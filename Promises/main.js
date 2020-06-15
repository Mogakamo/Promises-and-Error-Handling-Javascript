// create a new promise
const promise = new Promise((resolve,reject) => {
    resolve();
})
promise
    .then(() => {
        console.log('Resolved');
    })
    .catch(err=> {
        console.log('Rejected');
    })