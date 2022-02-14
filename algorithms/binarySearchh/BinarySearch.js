function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    guess = list[middle];

    if (guess == item) {
      return middle;
    } else if (guess > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return null
}

const myList = [1, 3, 5, 7, 9];

console.log(binarySearch(myList, 3));
console.log(binarySearch(myList, -1));
