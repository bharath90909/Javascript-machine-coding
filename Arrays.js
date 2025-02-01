//1. Finding second largest

// const arr = [12, 45, 32, 78];
// let firstLargest = Number.MIN_VALUE;
// let secondLargest = Number.MIN_VALUE;

// for (let num of arr) {
//   if (num > firstLargest) {
//     secondLargest = firstLargest;
//     firstLargest = num;
//   } else if (num > secondLargest && num != firstLargest) {
//     secondLargest = num;
//   }
// }
// console.log(secondLargest);

//2.Find the Most Frequent Element in an Array

// const arr = [3, 1, 4, 4, 5, 1, 4, 3, 3, 3];

// const frequencyMap = arr.reduce((acc, num) => {
//   acc[num] = (acc[num] || 0) + 1;
//   return acc;
// }, {});
// let maxFrequency = Number.MIN_VALUE;
// let mostFrequentElement = null;
// for (const key in frequencyMap) {
//   const frequency = frequencyMap[key];
//   if (frequency > maxFrequency) {
//     mostFrequentElement = key;
//     maxFrequency = frequency;
//   }
// }
// console.log(mostFrequentElement);

//3. Remove duplicates without using Set()
// const arr1 = [1, 2, 3, 4, 5, 5, 5];
// const result = arr1.filter((ele, idx, arr) => arr.indexOf(ele) === idx);
// console.log(result);

//4.Remove duplicates without using extra space

// const arr = [5, 2, 3, 5, 8, 3, 10, 8, 2];
//arr[i]===arr[j];j--

// for (let i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(j, 1);
//       j--;
//     }
//   }
// }
// console.log(arr);

//5.  Find the Intersection of Two Arrays

// const arr1 = [1, 2, 3, 4, 5, 5, 5];
// const arr2 = [3, 4, 5, 6, 7];

// console.log([...new Set(arr1.filter((ele) => arr2.includes(ele)))]);

//6.  Find the Missing Number in an Array of Consecutive Numbers
// const arr = [3, 4, 5, 7, 8];

//formula : expectedSum-actualSum
// function missingNumber(arr) {
// think like expectedSum=(n*(n+1))/2
//n-->last number
// 1--> first number
//   const first = arr[0];
//   const last = arr[arr.length - 1];
//   const expectedSum = ((last - first + 1) * (first + last)) / 2;
//   const actualSum = arr.reduce((sum, ele) => sum + ele, 0);
//   return expectedSum - actualSum;
// }

// console.log(missingNumber(arr));

//7. Shuffle an Array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arrCopy = [...arr];

// for (i = arrCopy.length - 1; i > 0; i--) {
//   const randomIndex = Math.floor(Math.random() * (i + 1));
//   let temp = arrCopy[i];
//   arrCopy[i] = arrCopy[randomIndex];
//   arrCopy[randomIndex] = temp;
// }
// console.log(arrCopy);

//7. Remove all the occurences of given number

// const arr = [1, 2, 3, 1, 3, 5, 1, 3, 1];
// let givenNumber = 1;

// while (arr.includes(givenNumber)) {
//   let index = arr.indexOf(givenNumber);
//   arr.splice(index, 1);
// }
// console.log(arr);

//
