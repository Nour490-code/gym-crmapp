import express, { json } from "express";
import cors from "cors";
import route from "./routes/route.js";
import { connectDB } from "./config/db.js";
import { PORT } from "./config/env.js";

const app = express();

app.use(json());
app.use(cors());
app.use("/api", route);

app.listen(PORT, () => {
    connectDB();
    console.log(`Listening on port ${PORT}`);
})

