const numbers = [12, 14, 21, 24, 27, 37, 41, 42, 50];

function Binary_search(number) {
  let low = 0;
  let high = numbers.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (number == numbers[mid]) {
      return mid;
    } else if (number > numbers[mid]) {
      low = mid + 1;
    } else if (number < numbers[mid]) {
      high = mid - 1;
    }
  }

  return "not found !";
}

console.log(Binary_search(14));
