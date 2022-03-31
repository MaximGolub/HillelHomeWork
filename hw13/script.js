"use strict";

function makeString(str) {
    let currentString = str;

    function gluString(nextString) {
        currentString += ' ' + nextString;
        return gluString;
    }

    gluString.toString = function() {
        return currentString;
    }

    return gluString;
}

console.log(makeString('Hello')('world').toString()); // --> 'Hello world'
console.log(makeString('Test')('super')('test').toString()); // --> 'Test super test'

const person = {
    name: "Alex",
    dob: 1995,
    makeRequest() {
        alert("Request sended");
    }
}

function guard(fn) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - person.dob;

    return function() {
        if (age >= 18) {
            console.log('Access allow');
            console.log(`Name: ${person.name}, Year: ${person.dob}`);
            return fn();
        } else console.log('Access denied');
    };
}

const makeRequestGuard = guard(person.makeRequest);

makeRequestGuard();