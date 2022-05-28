"use strict";
let s = 0;
let n = 0;
while (true) {
  s += n;
  console.log(n);
  console.log(s);
  if (n === 1000) {
    break;
  }
  n += 1;
}
