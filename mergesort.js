function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  // console.log("firstHalf", firstHalf);
  // console.log("secondHalf", secondHalf);

  const length = wholeArray.length;
  const middle = length / 2;
  const firstHalf = wholeArray.slice(0, middle);
  const secondHalf = wholeArray.slice(middle, length);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
  const sortedArray = [];
  // FIRST HALF   [1, 0, 5, 7, 10]
  // SECOND HALF  [2, 9, 22, 3, 11]

  while (firstHalf.length !== 0 && secondHalf.length !== 0) {
    if (firstHalf[0] < secondHalf[0]) {
      sortedArray.push(firstHalf.shift());
    } else {
      sortedArray.push(secondHalf[0]);
      secondHalf.shift();
    }
  }
  return [...sortedArray, ...firstHalf, ...secondHalf];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array; // Base case
  }
  const splitArray = split(array);
  const firstHalf = mergeSort(splitArray[0]);
  const secondHalf = mergeSort(splitArray[1]);
  const finalSort = merge(firstHalf, secondHalf);
  return finalSort;
}
