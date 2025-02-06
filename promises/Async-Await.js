async function fetchUsers() {
  return new Promise((res) => {
    setTimeout(() => {
      res(["Bharath", "Nikhil"]);
    }, 5000);
  });
}

async function fetchProducts() {
  return new Promise((res) => {
    setTimeout(() => {
      res(["Shirts", "shoes"]);
    }, 5000);
  });
}

async function fetchData() {
  try {
    const usersData = await fetchUsers();
    console.log(usersData);
    const productsData = await fetchProducts();
    console.log(productsData);
  } catch (err) {
    console.log(err);
  }
}
fetchData();

// fetchUsers()
//   .then((res) => {
//     console.log(res);
//     return fetchProducts();
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// console.log("Outsite fetch Data");
