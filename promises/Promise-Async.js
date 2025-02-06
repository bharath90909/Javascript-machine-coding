async function fetchData1() {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        name: "bharath",
        age: "1",
      });
    }, 5000);
  });
}

async function fetchData2() {
  return new Promise((res) => {
    setTimeout(() => {
      res("Data 2 fetched");
    }, 2000);
  });
}

async function handlePromise() {
  const res1 = await fetchData1();
  console.log("Indise promise-1");
  console.log(JSON.parse(res1));
  const res2 = await fetchData2();
  console.log("Indise promise-2");
  console.log(res2);
}

// function handlePromise() {
//   fetchData1().then((res) => console.log(JSON.parse(res)));
//   console.log("Inside Promise -1");
//   fetchData2().then((res) => console.log(res));
//   console.log("Inside Promise -2");
// }
handlePromise();
console.log("Outside ");
