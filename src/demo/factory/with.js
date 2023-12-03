function createUser({ name }) {
  return {
    name,
    say() {
      console.log(this.name);
    },
  };
}

const me = createUser({ name: "Me" });
const you = createUser({ name: "You" });

console.log(me.say === you.say);

class User {
  constructor({ name }) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}

const reem = new User({ name: "Reem" });
const khaled = new User({ name: "Khaled" });

console.log(reem.say === khaled.say);

export default {};
