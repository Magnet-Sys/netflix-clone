import express from "express"; // es6
import authRoutes from "./routes/auth.route.js";

const app = express();

// app.get("/api/v1/signup", (req, res) => {
//   res.send("Signup route");
// });

// app.get("/api/v1/login", (req, res) => {
//   res.send("Login route");
// });

// app.get("/api/v1/logout", (req, res) => {
//   res.send("Logout route");
// });

// ("api/v1/signup");

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
