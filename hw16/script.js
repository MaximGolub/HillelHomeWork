'use strict'

function createAsyncList(iterations) {
    let arr = [];

    return function fn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                arr.unshift({
                    message: `Current iteration ${ iterations }`
                });

                iterations--;

                if (iterations != 0) {
                    resolve(fn());
                } else {
                    resolve(arr);
                }
            }, 1000);
        })
    }()
}

createAsyncList(3).then((data) => {
    console.log(data); // [{message: 'Current iteration 1'}, {message: 'Current iteration 2'}, {message: 'Current iteration 3'}]
});