import fs from "fs";

const kbEventHtmlContent = fs.readFileSync("./pages/kbEvent.html", "utf-8");
const errorHtmlContent = fs.readFileSync("./pages/error.html", "utf-8");

export async function homePage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(kbEventHtmlContent);
}

export async function errorPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(errorHtmlContent);
}
