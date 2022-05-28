"use strict";
let basePrice = 2;
while (true) {
    const percentPrice = (basePrice * 15) / 100;
    console.log(percentPrice);
    basePrice += 0.1;
}
