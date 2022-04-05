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

////// 2

function contains(obj, val) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            let hasObjects = false;

            for (prop in obj) {
                if (typeof(obj[prop]) === 'object') {
                    hasObjects = true;
                }
            }

            if (element === val) {
                return true;
            } else if (element !== val && !hasObjects) {
                return false;
            } else if (typeof(element) === 'object') {
                return contains(element, val);
            }
        }
    }
}

// Alternative Solution

// function contains(obj, val) {
//     for (let key in obj) {
//         if (Object.hasOwnProperty.call(obj, key)) {
//             const element = obj[key];

//             if (element === val) return true;
//             else if (typeof(element) === "object" && element !== null) {
//                 return contains(element, val);
//             }
//         }
//     }
//     return false;
// }

const obj = {
    a: {
        b: {
            c: {
                d: 'test',
                e: {
                    f: 5
                }
            }
        }
    }
}

console.log(contains(obj, 5)); // true
console.log(contains(obj, 'ololo')); // false

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