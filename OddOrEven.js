function oddOrEven(array) {
  //enter code here

  let resultArray = 0;
  array.map((item) => {
    resultArray += item;
  });
  const answer = resultArray % 2;
  if (answer === 0 || (array.length === 1 && array[0] === 0)) {
    console.log("even");
    return "even";
  } else {
    console.log("odd");
    return "odd";
  }
}

const test = [0];
const test1 = [1];
const test2 = [2];
const test3 = [1023, 1, 2];
const test4 = [-1023, -1, 3];
oddOrEven(test4);
