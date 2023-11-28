class OrderManager {
  constructor() {
    this.orders = [];
    this.history = [];
  }

  excuteCommand(command, other) {
    this.orders = command.excute(this.orders, other);
    this.history.push(command);
    return this;
  }

  print() {
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

class CancelOrderCommand {}

class TrackOrderCommand {}

const orderManager = new OrderManager();

orderManager
  .excuteCommand(new PlaceOrderCommand("10", "order-10"), {
    address: "123",
  })
  .print();

orderManager
  .excuteCommand(new PlaceOrderCommand("20", "order-20"), {
    address: "123",
  })
  .print();

export default {};
