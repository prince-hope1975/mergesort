// index.ts
var mergeSort = (arr) => {
  if (arr.length === 0)
    return "Please provide a non empty array!";
  if (arr.length === 1)
    return arr;
  const midpoint = Math.floor(arr.length / 2);
  const sliceOne = arr.slice(0, midpoint);
  const sliceTow = arr.slice(midpoint, arr.length);
  return merge(mergeSort(sliceOne), mergeSort(sliceTow));
};
var merge = (sliceOne, rightArr) => {
  const result = [];
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
console.log(mergeSort([]));
console.log(mergeSort([10, 7, 8, 9, 1, 5]));
console.log(mergeSort([30, 20, 10, 50, 22, 33, 55]));
