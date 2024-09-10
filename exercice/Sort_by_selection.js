function selection_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    return arr;
  }
}

const numbers = [4, 3, 9, 8, 2, 6, 1, 7, 5];

console.log(selection_sort(numbers));
