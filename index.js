const express = require("express");
const app = express();

const { db } = require("./config");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Welcome to REST API");
});
app.use("/klikdaily", require("./routes/stocks"));

if (db) {
    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
}
