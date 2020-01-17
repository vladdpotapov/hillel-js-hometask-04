// TASK #01:
// Создать массив, длину и элементы которого задаёт пользователь. 
// Затем отсортировать массив по возрастанию. 
// Затем, удалить элементы из массива с 2 по 4 (включительно!). 
// По мере изменений, выводить содержимое массива на страницу.

let array = [], digit;
let elementQuantity = parseInt(prompt('Enter element quantity for the array'));

for (let count = 0; count < elementQuantity; count++) {
    digit = parseInt(prompt(`Enter the digit # ${count + 1}`));
    array.push(digit);
}

document.write(`You have created the array with <strong>${elementQuantity}</strong> elements.` + '<br>' +
               'This is your array -  ' + '<strong>' + array + '</strong>');

function sortArray() {
    array.sort(function(a, b) {
        return a - b
    });
    document.write('<br> This is your sorted array -  ' + '<strong>' + array + '</strong>');
}

sortArray();

document.write('<br> Deleted elements from the array: ' + '<strong>' + array.splice(1, 3) + '</strong>');
document.write('<br> Array without deleted elements - ' + '<strong>' + array + '</strong>');