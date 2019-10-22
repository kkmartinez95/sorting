function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        array = swap(array, j);
      }
    }
  }

  return array;
}

function swap(array, index) {
  let a = array[index];
  let b = array[index + 1];

  array[index + 1] = a;
  array[index] = b;
  return array;
}
