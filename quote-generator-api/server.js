const express = require("express");
const app = express();

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Hard work beats talent when talent doesn’t work hard."
];

app.get("/quote", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex]
    console.log("Random Index:", randomIndex);
    console.log("Random Quote:", randomQuote);

    res.json({quote: randomQuote});
})

app.listen(5001, () => {
    console.log("Quote Generator API running on http://localhost:5001/quote");
})