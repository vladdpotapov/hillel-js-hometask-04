// TAKS #02:
// Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
// Найти сумму и количество положительных элементов.
// Найти минимальный элемент массива и его порядковый номер.
// Найти максимальный элемент массива и его порядковый номер.
// Определить количество отрицательных элементов.
// Найти количество нечетных положительных элементов.
// Найти количество четных положительных элементов.
// Найти сумму четных положительных элементов.
// Найти сумму нечетных положительных элементов.
// Найти произведение положительных элементов.
// Найти наибольший среди элементов массива, остальные обнулить.

let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let posElementAmount = 0;
let posElementSum = 0;
let negElementAmount = 0;
let negElementSum = 0;

let minElement = array[0];
let minElementIndex;
let maxElement = array[0];
let maxElementIndex;

let posEvenElementAmount = 0;
let posOddElementAmount = 0;

let posEvenElementSum = 0;
let posOddElementSum = 0;

let posElementProduct = 1;

document.write('Initial array - ' + '<strong>' + array + '</strong>' +
               '<br> Array length - ' + '<strong>' + array.length + '</strong>');

// 1. Найти сумму и количество положительных элементов.
for (let count = 0; count < array.length; count++) {
    if (array[count] > 0) {
        posElementAmount++;
        posElementSum += array[count];
    }
}

document.write('<hr> Positive elements amount: ' + '<strong>' + posElementAmount + '</strong>');
document.write('<br> Positive elements sum: ' + '<strong>' + posElementSum + '</strong>');

// 2. Найти минимальный элемент массива и его порядковый номер.
for (let count = 0; count < array.length; count++) {
    if (array[count] < minElement) {
        minElement = array[count];
        minElementIndex = count;
    }
}

document.write('<hr> The minimum element: ' + '<strong>' + minElement + '</strong>');
document.write('<br> The minimum element index: ' + '<strong>' + minElementIndex + '</strong>');

// 3. Найти максимальный элемент массива и его порядковый номер.
for (let count = 0; count < array.length; count++) {
    if (array[count] > maxElement) {
        maxElement = array[count];
        maxElementIndex = count;
    }
}

document.write('<hr> The maximum element: ' + '<strong>' + maxElement + '</strong>');
document.write('<br> The maximum element index: ' + '<strong>' + maxElementIndex + '</strong>');

// 4. Определить количество отрицательных элементов.
for (let count = 0; count < array.length; count++) {
    if (array[count] < 0) {
        negElementAmount++;
    }
}

document.write('<hr> Negative elements amount: ' + '<strong>' + negElementAmount + '</strong>');

// 5. Найти количество нечетных положительных элементов.
for (let count = 0; count < array.length; count++) {
    if ((array[count] > 0) && (array[count] % 2 !== 0)) {
        posOddElementAmount++;
    }
}

document.write('<hr> Positive odd elements amount: ' + '<strong>' + posOddElementAmount + '</strong>');

// 6. Найти количество четных положительных элементов.
for (let count = 0; count < array.length; count++) {
    if ((array[count] > 0) && (array[count] % 2 === 0)) {
        posEvenElementAmount++;
    }
}

document.write('<hr> Positive even elements amount: ' + '<strong>' + posEvenElementAmount + '</strong>');

// 7. Найти сумму четных положительных элементов.
for (let count = 0; count < array.length; count++) {
    if ((array[count] > 0) && (array[count] % 2 === 0)){
        posEvenElementSum += array[count];
    }
}

document.write('<hr> Positive even elements sum: ' + '<strong>' + posEvenElementSum + '</strong>');

// 8. Найти сумму нечетных положительных элементов.
for (let count = 0; count < array.length; count++) {
    if ((array[count] > 0) && (array[count] % 2 !== 0)) {
        posOddElementSum += array[count];
    }
}

document.write('<hr> Positive odd elements sum: ' + '<strong>' + posOddElementSum + '</strong>');

// 9. Найти произведение положительных элементов.
for (let count = 0; count < array.length; count++) {
    if (array[count] > 0) {
        posElementProduct *= array[count];
    }
}

document.write('<hr> Positive elements production: ' + '<strong>' + posElementProduct + '</strong>');

// 10. Найти наибольший среди элементов массива, остальные обнулить.
for (let count = 0; count < array.length; count++) {
    if (array[count] > maxElement) {
        maxElement = array[count];
        maxElementIndex = count;
    }

    if (array[count] !== maxElement) {
        array[count] = 0;
    }
}

document.write('<hr> The maximum element: ' + '<strong>' + maxElement + '</strong>');

document.write('<hr>' + '<strong>' + array + '</strong>');