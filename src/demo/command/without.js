class OrderManager {
  constructor() {
    this.orders = [];
  }

  placeOrder(id, order) {
    console.log(`You have successfully ordered ${order} (${id})`);
    this.orders.push(id);
  }

  cancelOrder(id) {
    console.log(`You have cancelled order ${id}`);
    this.orders = this.orders.filter((_id) => _id !== id);
  }

  trackOrder() {
    console.log(`You will recieve your order in 20 minutes`);
  }
}

export default OrderManager;
