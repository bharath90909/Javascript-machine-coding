function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    res(123);
  });
}
function createOrder(cart) {
  return new Promise((res, rej) => {
    if (validateCart(cart)) {
      res(cart.orderId);
    } else {
      rej("cart is not valid");
    }
  });
}

const cart = {
  orderId: 1,
  productName: "Nike",
};

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .catch((err) => console.error(err))
  .then((paymentId) => {
    console.log(paymentId);
  })
  .catch((err) => console.log(err));
