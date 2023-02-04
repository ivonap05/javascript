for (let i = 0; i < 10; i++) {
  console.log(i);
}

const users = ["Ivona", "Tasa", "Ana"];

for (const user of users) {
  console.log(user);
}

const loggedInUser = {
  name: "Ivona",
  age: 17,
  isAdmin: true,
};

for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Do you want to quit?")
}

console.log("Done!");