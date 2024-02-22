import express from "express";
import { errorPage, homePage } from "./controllers/pageController.js";

const app = express();

const port = 8080;

// make public folder accessible
app.use(express.static("public"));

app.get("/", homePage);
app.get("*", errorPage);

app.listen(port, () => {
  console.log("Server is running on port" + " " + port);
});
