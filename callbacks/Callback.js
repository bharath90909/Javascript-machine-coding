function deliverOrder(callback) {
  callback();
}

function deliveryBoy(contact) {
  console.log("Calling to : ", contact);
}

function placeOrder(contact) {
  deliverOrder(() => deliveryBoy(contact));
}

placeOrder(987654321);
