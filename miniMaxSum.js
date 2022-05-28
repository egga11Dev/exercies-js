function miniMaxSum(arr) {
  // Write your code here
  let sum = 0;
  arr.sort();
  arr.forEach((element) => {
    sum += element;
  });
  const answerOne = sum - arr[arr.length - 1];
  const answerTwo = sum - arr[0];
  console.log(answerOne, answerTwo);
}
const test = [7, 69, 2, 221, 8974];
miniMaxSum(test);
