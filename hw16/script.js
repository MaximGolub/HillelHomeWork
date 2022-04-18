'use strict'

function createAsyncList(iterations, arr = []) {

    return new Promise((resolve, reject) => {

        if (iterations <= 0) return;

        setTimeout(() => {
            arr.unshift({
                message: `Current iteration ${ iterations }`,
            });

            createAsyncList(iterations - 1, arr);
            resolve(arr);

        }, 1000);
    })
}

createAsyncList(3).then((data) => {
    console.log(data, '---') // [{message: 'Current iteration 1'}, {message: 'Current iteration 2'}, {message: 'Current iteration 3'}]
});