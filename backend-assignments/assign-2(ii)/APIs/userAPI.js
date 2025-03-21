const exp = require("express");
const userApp = exp.Router();

let users = [
  { name: "somu", id: 1, age: 19 },
  { name: "ramu", id: 2, age: 18 },
];

userApp.use(exp.json());

userApp.get("./users", (req, res) => {
  res.send({ message: "all users", payload: users });
});
userApp.get("/users/:id", (req, res) => {
  const paramId = Number(req.params.id);
  let result = users.find((user) => user.id === paramId);
  if (result === undefined) {
    res.send({ message: "User not found" });
  } else {
    res.send({ message: "user", payload: result });
  }
});

userApp.post("/user", (req, res) => {
  let newUser = req.body;

  users.push(newUser);
  res.send({ message: "New user created" });
});

userApp.put("/user", (req, res) => {
  let modifiedUser = req.body;

  let userIndex = users.findIndex((user) => user.id === modifiedUser.id);

  if (userIndex === -1) res.send({ message: "User not found to update" });
  else {
    users.splice(userIndex, 1, modifiedUser);
    res.send({ message: "User modified" });
  }
});

userApp.delete("/users/:id", (req, res) => {
  let paramId = Number(req.params.id);
  let userIndex = users.findIndex((user) => user.id === paramId);

  if (userIndex === -1) res.send({ message: "User not found" });
  else {
    users.splice(userIndex, 1);
    res.send({ message: "User has been deleted" });
  }
});
module.exports = userApp;
