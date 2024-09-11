// Remove duplicates from a table
function Remove_duplicates(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array.splice(j, 1);
      }
    }
  }
  return array;
}

arr = ["a", "b", "c", "d", "e", "f", "b", "j", "h"];

console.log(Remove_duplicates(arr));
