import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
