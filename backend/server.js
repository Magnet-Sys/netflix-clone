import express from "express"; // es6
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

console.log("MONGO_URI", process.env.MONGO_URI);

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
