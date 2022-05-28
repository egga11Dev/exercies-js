class SmallestIntegerFinder {
  findSmallestInt(args) {
    let minNumber = args[0];
    let i;
    for (i of args) {
      if (i < minNumber) {
        minNumber = i;
      }
    }
    return minNumber;
  }
}
SmallestIntegerFinder.findSmallestInt([78, 56, 232, 12, 8]);
