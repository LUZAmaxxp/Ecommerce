// Start Server
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import ProductRoute from "./route/ProductRoute.js";
import UserRoute from "./route/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Set JSON size limit
app.use("/product", ProductRoute);
app.use("/user", UserRoute);

// Connect to the product database
// const ProductDB = mongoose.createConnection(process.env.DB_URL_PRODUCT);
// ProductDB.once('open', () => {
//     console.log("✅ DataBase Connect Successfully [PRODUCT]");
// });
// ProductDB.on('error', (err) => {
//     console.log("❌ Error Connect To DataBase [PRODUCT]", err);
// });

// Connect to the user database
// const userDb = mongoose.createConnection(process.env.DB_URL_USER);
// userDb.once('open', () => {
//     console.log("✅ Connect Successfully to Database [USER]");
// });
// userDb.on('error', (err) => {
//     console.log("❌ Connect to Database Failed [USER]", err);
// });

mongoose
  .connect(
    "mongodb+srv://allouchayman21:KU39Qaq9Bo8cnRgT@cluster0.uyowciu.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("✅ Connect Successfully to Database [Ecommerce]");
  });

app.listen(5000, function (err) {
  if (err) console.log(err);
  console.log("✅ Server listening on PORT", 5000);
});
