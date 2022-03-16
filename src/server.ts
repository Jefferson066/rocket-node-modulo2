import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "io" });
});

app.listen(3333, () => console.log("server is runnig!"));
