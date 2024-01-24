import { observable } from "./Observable.js";

function handleSwim(data) {
  console.log(`Swim - ${data}`);
}

function handleWalk(data) {
  console.log(`Walk - ${data}`);
}

observable.subscribe(handleSwim);
observable.subscribe(handleWalk);

document.getElementById("swim").addEventListener("click", function (e) {
  observable.notify("SWIM");
});
document.getElementById("walk").addEventListener("click", function (e) {
  observable.notify("WALK");
});
