

const promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve('This is my promise'), 1500);
        setTimeout(() => {
            reject('Promise took too long and its rejected')
        }, 1000)
})

promise.then(data => {
    return data;
}).then((data) => console.log(data)).catch((error) => {
    console.log('error:', error);
})
