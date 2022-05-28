function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  let filtered = numbersArray.filter(arrayFilter);
  function arrayFilter(valueArray) {
    let filterNum = valueArray % 2;
    return filterNum == 0;
  }
  return filtered;
}
