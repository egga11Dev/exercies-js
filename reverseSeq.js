"use strict";
const reverseSeq = (n) => {
  let listNum = [];
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      listNum.push(i);
    }
  }

  return listNum.reverse();
};
