import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@` + 
  `${process.env.MONGO_DB}:${process.env.MONGO_PORT}/miapp?authSource=admin`
);

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

export default Animal;