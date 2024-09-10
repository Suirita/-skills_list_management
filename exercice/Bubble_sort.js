function bubble_sort(arr) {
  let sort = false;
  for (let i = 0; i < arr.length; i++) {
    sort = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        sort = false;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }

    if (sort == true) {
      return arr;
    }
  }

  return arr;
}

const numbers = [1, 5, 8, 3, 2, 6, 7, 4, 9];

console.log(bubble_sort(numbers));
