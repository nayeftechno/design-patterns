class CancelOrderCommand {
  constructor(id) {
    this.id = id;
  }
  excute(orders) {
    console.log(`You have canceled your order ${this.id}`);
    return orders.filter((_id) => _id !== this.id);
  }
}

class PlaceOrderCommand {
  constructor(order, id) {
    this.order = order;
    this.id = id;
  }
  excute(orders) {
    console.log(`You have successfully order ${this.order} (${this.id})`);
    orders.push(`${this.id}`);
    return orders;
  }
}

class OrderManager {
  constructor() {
    this.orders = [];
    this.history = [];
  }
  excuteCommand(command) {
    this.history.push(command);
    this.orders = command.excute(this.orders);
  }
  print() {
    console.log(this.history);
    console.log(this.orders);
  }
}

const orderManager = new OrderManager();
orderManager.excuteCommand(new PlaceOrderCommand("order-100", "100"));
orderManager.print();
orderManager.excuteCommand(new PlaceOrderCommand("order-200", "200"));
orderManager.print();
orderManager.excuteCommand(new CancelOrderCommand("200"));
orderManager.print();
orderManager.excuteCommand(new CancelOrderCommand("100"));
orderManager.print();
