"use strict";

//// 1

function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === 'object') {
            sum += getSum(arr[i]);
        } else sum += arr[i];
    }

    return sum;
}

console.log(getSum([1, 2, 3])); // 6
console.log(getSum([1, [2, [3]]])); // 6
