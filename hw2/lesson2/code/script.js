// let myName = prompt("Как тебя зовут?");

// let agreement = confirm("Тебя зовут " + myName);

// alert(agreement);

// let a = 5 + (3 * 10) / 2;
// console.log(a);

// let count = 0;
// count--;
// console.log(count);
// count = count + 5;
// console.log(count);

// let str = "Test";
// let count = 10;

// str /= " Test";
// console.log(null + undefined);

// console.log(NaN == NaN);

// console.log(Number(" "), Number(""));

let testString = prompt("Please type some string");
let isAnswer = confirm("Please select");

if (testString === "str") {
	if (isAnswer) {
		alert("This is correct string, and true");
	} else {
		alert("This is correct string, and false");
	}
} else if (testString === "str2") {
	alert("This is correct string");
} else if (testString === null) {
	alert("This is null");
} else {
	alert("This is incorrect string");
}
