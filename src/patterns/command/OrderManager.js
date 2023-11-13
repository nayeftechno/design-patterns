class Command {
  constructor(excute) {
    this.excute = excute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    console.log(`You have successfully order ${order} (${id})`);
    orders.push(id);
    return orders;
  });
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    console.log(`You cancelled order ${id}`);
    return orders.filter((_id) => _id !== id);
  });
}

function TrackOrderCommand(id) {
  return new Command((orders) => {
    console.log(`Your order ${id} will be arrive in 20 minutes`);
    return orders;
  });
}

class OrderManager {
  constructor() {
    this.orders = [];
  }
  excuteCommand(command, ...args) {
    this.orders = command.excute(this.orders, args);
  }
  print() {
    console.log(this.orders);
  }
}

const orderManager = new OrderManager();

orderManager.excuteCommand(new PlaceOrderCommand("order-100", "100"));
orderManager.print();

orderManager.excuteCommand(new PlaceOrderCommand("order-200", "200"));
orderManager.print();

orderManager.excuteCommand(new TrackOrderCommand("200"));
orderManager.print();

orderManager.excuteCommand(new CancelOrderCommand("200"));
orderManager.print();
