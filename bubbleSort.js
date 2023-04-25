//Sample Array
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Declare Bubble Sort Function
function bubbleSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++){
        if (array[j]>array[j + 1]){
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            }
        }
    }
}

//Print Original Array
console.log("UNSORTED ARRAY:")
console.log(numbers);
//Execute Bubble Sort Function
console.log("SORTED ARRAY:")
bubbleSort(numbers);
console.log(numbers);