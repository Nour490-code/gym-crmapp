import express, { json } from "express";
import cors from "cors";
import route from "./routes/route.js";
import { connectDB } from "./config/db.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());
app.use("/api", route);

app.listen(port, () => {
    connectDB();
    console.log(`Listening on port ${port}`);
})

