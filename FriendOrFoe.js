function friend(friends) {
  //your code here
  let listFriends = [];
  friends.map((name) => {
    if (name.length === 4) {
      listFriends.push(name);
    }
  });
  console.log(listFriends);
  return listFriends;
}

const list = ["Ryan", "Jimmy", "123", "4", "Cool Man"];
friend(list);
