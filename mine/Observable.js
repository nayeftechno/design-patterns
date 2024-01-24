function Observable() {
  this.observers = [];
}

Observable.prototype.subscribe = function (observer) {
  this.observers.push(observer);
};

Observable.prototype.unsubscribe = function (observer) {
  this.observers = this.observers.filter((_observer) => _observer !== observer);
};

Observable.prototype.notify = function (data) {
  this.observers.forEach((observer) => observer(data));
};

const observable = new Observable();

export { observable };
