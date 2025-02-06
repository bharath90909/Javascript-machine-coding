async function fetchData1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej({
        name: "bharath",
        age: "1",
      });
    }, 5000);
  });
}

async function fetchData2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Data 2 fetched");
    }, 2000);
  });
}

async function handlePromise() {
  const promise1 = fetchData1();
  const promise2 = fetchData2();
  try {
    const [data1, data2] = await Promise.all([promise1, promise2]);
    // const [data1, data2] = await Promise.allSettled([promise1, promise2]);
    // const data = await Promise.race([promise1, promise2]);
    // const data = await Promise.any([promise1, promise2]);
    console.log("Data 1: ", data1);
    console.log("Data 2: ", data2);
    // console.log("data in case of race or any:", data);
  } catch (err) {
    console.log("Error occured:", err);
  }
}

handlePromise();
