const exp = require("express");
const app = exp();
app.use(exp.json());

app.listen(3500, () => console.log("Server running on port 3500..."));

// First middleware (executes for every request)
app.use((req, res, next) => {
  console.log("First middleware executed");
  next();
});

// Second middleware (executes for POST requests)
const secondMiddleware = (req, res, next) => {
  console.log("Second middleware executed");
  // next(); // Removing this will stop request processing
};

// Third middleware (executes for POST requests)
const thirdMiddleware = (req, res, next) => {
  console.log("Third middleware executed");
  next();
};

// Route with second & third middleware for POST request
app.post("/data", secondMiddleware, thirdMiddleware, (req, res) => {
  res.send({ message: "POST request handled" });
});

// Middleware for invalid paths
app.use((req, res) => {
  res.status(404).send({ error: "Invalid route" });
});

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: "Something went wrong" });
});
