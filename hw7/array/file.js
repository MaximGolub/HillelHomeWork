function removeDuplicates(arr){
    return arr.filter((element, index) => arr.indexOf(element) === index);
}

const resultArray = removeDuplicates([1, 2, 3, 2, 2, 3, 1, 5, 9, 7, 7]);

console.log(resultArray);

function reverteString(str) {
    let arr = str.split('');
    arr.reverse();
    let resultStr = arr.join('');
    return resultStr;
}

const revertedStr = reverteString('laptop');

console.log(revertedStr);

function createMatrix(n, m) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = new Array();
        for (let j = 0; j < m; j++) {
            arr[i][j] = (i * m) + (j + 1);
        }
    }

    return arr;
}

const matrixArr = createMatrix(3, 4);

console.log(matrixArr);