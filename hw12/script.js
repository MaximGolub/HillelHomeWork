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

////// 3

function createStack() {
    const arr = [];

    return {
        add: function(element) {
            arr.push(element);
            return arr;
        },

        remove: function(element) {
            arr.pop(element);
            return arr;
        },

        get: function() {
            return arr;
        }
    }
}

const stack = createStack();
console.log(stack.add(5));
console.log(stack.add("test"));
console.log(stack.remove());
console.log(stack.get()); // [5]