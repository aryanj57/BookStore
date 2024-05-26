import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;
const MONGO_URI = process.env.MONGODB_URI;

// connect to database
try {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to MongoDb database");
} catch (error) {
  console.log("error: ", error);
}

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
