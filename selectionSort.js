//Sample Array
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Declare Selection Sort Function
function selectionSort(array) {
    const length = array.length;
    let temp = 0;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[i]) {
                //swap array[i] and array[j ]
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

//Print Original Array
console.log("UNSORTED ARRAY:")
console.log(numbers);
//Execute Selection Sort Function
console.log("SORTED ARRAY (Selection Sort):")
console.log(selectionSort(numbers));