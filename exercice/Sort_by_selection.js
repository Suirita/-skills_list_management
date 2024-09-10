const numbers = [1, 5, 8, 3, 2, 6, 7, 4, 9];

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
  console.log(numbers);
}
