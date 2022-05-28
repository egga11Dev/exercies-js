function rentalCarCost(d) {
  // Your solution here
  const costDay = 40;
  if (d >= 3 && d < 7) {
    const totalCost = costDay * d;
    return totalCost - 20;
  } else if (d >= 7) {
    const totalCost = costDay * d;
    return totalCost - 50;
  } else {
    return costDay * d;
  }
}
