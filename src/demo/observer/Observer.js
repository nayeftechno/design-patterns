function Observer() {
  this.observers = new Set();
}
Observer.prototype.subscribe = function (fn) {
  this.observers.add(fn);
};
Observer.prototype.unsubscribe = function (fn) {
  this.observers = this.observers.delete(fn);
};
Observer.prototype.notify = function (data) {
  Array.from(this.observers).forEach((observer) => observer(data));
};

const observable = new Observer();

export default observable;
