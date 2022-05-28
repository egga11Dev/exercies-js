"use strict";
let e = 4000;
while (true) {
  const t = (e * 20) / 100;
  console.log("total = " + e + " percent = " + t);
  if (e === 9000) {
    break;
  } else {
    e += 500;
  }
}
