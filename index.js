import Animal from "./config/db.js";
import express from "express";

const app = express();

app.get("/", async (_req, res) => {
  console.log("listando... chanchitos");
  const animales = await Animal.find();
  return res.send(animales);
});

app.get("/crear", async (_get, res) => {
  console.log("creando...");
  await Animal.create({ tipo: "Chanchito", estado: "Feliz" });
  return res.send("ok");
});

app.listen(3000, () => console.log("listening on port 3000..."));
