import express, { json } from "express";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(json());
app.use(cors());
app.use("/api", route);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

