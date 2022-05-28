function stray(numbers) {
  const sortNumbers = numbers.sort();
  if (sortNumbers[0] != sortNumbers[1]) {
    console.log(sortNumbers[0]);
    return sortNumbers[0];
  }
  console.log(sortNumbers[numbers.length - 1]);
  return sortNumbers[-1];
}
const test = [17, 17, 3, 17, 17, 17, 17];
stray(test);
const test2 = [0, 0, 0, 7, 0, 0, 0];
stray(test2);

/*   const sortNumbers = numbers.sort(a, b).reverse();
  console.log(sortNumbers);
  const resultSortNumbers = sortNumbers[numbers.length - 1];
  console.log(resultSortNumbers);
  return resultSortNumbers; */
