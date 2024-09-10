const numbers = [1, 5, 8, 3, 2, 6, 7, 4, 9];

// Bubble sort
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > numbers[j + 1]) {
      const i = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = i;
    }
  }
  console.log(numbers);
}

// Insertion sort
for (let i = 1; i < numbers.length; i++) {
  let temp_value = numbers[i];
  let j = i - 1;
  while (j >= 0 && numbers[j] > temp_value) {
    numbers[j + 1] = numbers[j];
    j--;
  }
  numbers[j + 1] = temp_value;
  console.log(numbers)
}

// Sort by selection
for (let i = 0; i < numbers.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }
  let temp = numbers[i];
  numbers[i] = numbers[minIndex];
  numbers[minIndex] = temp;
  console.log(numbers)
}
