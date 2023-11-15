const createEmployee = ({ firstName, lastName, email = "email@email.com" }) => {
  return {
    firstName,
    lastName,
    email,
    fullName() {
      console.log(`Welcome ${this.firstName} ${this.lastName}`);
    },
  };
};

function ask() {
  console.log(`How are ${this.firstName}`);
}

const employee1 = createEmployee({
  firstName: "Salim",
  lastName: "Nader",
});

const employee2 = createEmployee({
  firstName: "Reem",
  lastName: "Omar",
  email: "reem@reem.com",
});

employee1.fullName();

ask.call(employee1);

employee2.fullName();

ask.call(employee2);
