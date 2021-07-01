// <!DOCTYPE html><html><head><title>Questions</title><link rel="stylesheet" href="/stylesheets/reset.css">
// <script src="/search.js"></script><script src="/search-ajax.js"></script>

const express = require('express');
const path = require('path');

const app = express();

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});
