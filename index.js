// Implementation of Insertion Sort in JavaScript

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key; // Insert the key at the correct position
    }
    return arr;
}

// Example usage
const array = [8, 4, 2, 9, 6, 1];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
