function sumArray(array) {
  let total = 0;
  array.forEach((element) => {
    total += element;
  });
  return total;
}

const test = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
sumArray(test);
