class OrderManager {
  constructor() {
    this.orders = [];
    this.history = [];
  }

  excuteCommand(command, other) {
    this.orders = command.excute(this.orders, other);
    this.history.push(command);
  }

  printOrders() {
    console.log(this.orders);
  }
}

class PlaceOrderCommand {
  constructor(id, order) {
    this.id = id;
    this.order = order;
  }

  excute(orders, other) {
    other && console.log(other);
    console.log(`You have successfully ordered ${this.order} (${this.id})`);
    orders.push(this.id);
    return orders;
  }
}

class CancelOrderCommand {
  constructor(id) {
    this.id = id;
  }

  excute(orders, other) {
    other && console.log(other);
    console.log(`You have cancelled order ${this.id}`);
    return orders.filter((_id) => _id !== this.id);
  }
}

class TrackOrderCommand {
  constructor(id) {
    this.id = id;
  }

  excute(orders, other) {
    other && console.log(other);
    console.log(`You will recieve your order ${this.id} in 20 minutes`);
    return orders;
  }
}

const orderManager = new OrderManager();

orderManager.excuteCommand(new PlaceOrderCommand("100", "order-100"));

orderManager.excuteCommand(new PlaceOrderCommand("200", "order-200"));

orderManager.excuteCommand(new PlaceOrderCommand("300", "order-300"));

orderManager.excuteCommand(new CancelOrderCommand("300"));

orderManager.excuteCommand(new CancelOrderCommand("100"));

orderManager.excuteCommand(new TrackOrderCommand("200"));

export default {};
