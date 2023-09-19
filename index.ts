/**
 * The main sorting Array
 * @param {array} arr Array in question
 * @returns Sorted array
 */
const mergeSort = (arr) => {
  if (arr.length === 0) return "Please provide a non empty array!";
  if (arr.length === 1) return arr;

  const midpoint = Math.floor(arr.length / 2);
  const sliceOne = arr.slice(0, midpoint);
  const sliceTow = arr.slice(midpoint, arr.length);

  return merge(mergeSort(sliceOne), mergeSort(sliceTow));
};

const merge = (sliceOne: Array<number>, rightArr: Array<number>) => {
  //To merge the both incoming arrays
  const result = [] as number[];

  let leftCount = 0;
  let rightCount = 0;

  while (leftCount < sliceOne.length && rightCount < rightArr.length) {
    if (sliceOne[leftCount] < rightArr[rightCount]) {
      result.push(sliceOne[leftCount]);
      leftCount++;
    } else {
      result.push(rightArr[rightCount]);
      rightCount++;
    }
  }

  while (leftCount < sliceOne.length) {
    result.push(sliceOne[leftCount]);
    leftCount++;
  }

  while (rightCount < rightArr.length) {
    result.push(rightArr[rightCount]);
    rightCount++;
  }

  return result;
};

console.log(mergeSort([])); // []
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55])); //[10, 20, 22, 30, 33, 50, 55]
