function sc(screws) {
  let listCart = screws.split("");
  let i;
  listCart.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
  });
  console.log(listCart);
}
sc("-+-+-++++++++++");
