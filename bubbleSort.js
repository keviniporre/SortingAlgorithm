const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    const length = array.length;
    for (let j = 0; j < length; j++) {
        for (let i = 0; i < length; i++){
        if (array[i]>array[i+1]){
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
            }
        }
        console.log(numbers);
    }
}

bubbleSort(numbers);
console.log(numbers);