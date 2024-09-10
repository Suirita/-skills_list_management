const numbers = [1, 5, 8, 3, 2, 6, 7, 4, 9];

// Bubble sort
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > numbers[j + 1]) {
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
  console.log(numbers);
}
