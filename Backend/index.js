import express from "express";
import cors from "cors";
import "dotenv/config";
import main from "./config/mongoDB";

const app = express();

app.use(express.json());
app.use(cors());

let port = process.env.PORT || 8080;
main();

app.listen(port, () => {
    console.log(`App was listen on port ${port}`);
})

app.get("/", (req, res) => {
    res.send("Server Started.");
})