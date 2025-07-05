import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App was listen on port ${port}`);
})

app.get("/", (req, res) => {
    res.send("Backend Working.");
})