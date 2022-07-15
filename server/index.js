import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";

dotenv.config();

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected !"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

// Routing
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

// Running the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
