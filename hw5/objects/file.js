function generateObject(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let iterationValue = str.slice(0, i + 1);
        obj[getRandomString(i+1)] = {
            "value": iterationValue,
        };
    }
    return obj;
}

function getRandomString(length) {
    var randomChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(
            Math.floor(Math.random() * randomChars.length),
        );
    }
    return result;
}

function getStringFromObject(obj) {
    let str = '';
    for(let key in obj){
        str = obj[key].value;
    }
    return str;
}

let obj = generateObject('test');

console.log(obj);
console.log(getStringFromObject(obj));