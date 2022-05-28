function plusMinus(arr) {
  // Write your code here
  const lengthArr = arr.length;
  let listAnswer = [];
  let pos = [];
  let neg = [];
  let ceros = [];
  arr.forEach((element) => {
    if (element > 0) {
      pos.push(element);
    } else if (element === 0) {
      ceros.push(element);
    } else {
      neg.push(element);
    }
  });
  const totalPos = pos.length / lengthArr;
  const totalNeg = neg.length / lengthArr;
  const totalCeros = ceros.length / lengthArr;
  listAnswer.push(totalPos.toFixed(lengthArr));
  listAnswer.push(totalNeg.toFixed(lengthArr));
  listAnswer.push(totalCeros.toFixed(lengthArr));
  let answer;
  for (answer of listAnswer) {
    console.log(answer);
  }
}

const test = [-4, 3, -9, 0, 4, 1];
plusMinus(test);
