import express from "express";
import bodyParser from "body-parser";
import router from "./routes.js";

const app = express();

const port = 3015

app.listen(port, (req, res) => {
  console.log("Rampage on port 3015!")
})

app.get("/home", (req, res) => {
  res.status(200).send("Welcome to the Agency")
})

app.use(bodyParser.json())
app.use("/home/characters", router)
