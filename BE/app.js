
import express from "express";
// import cors from "cors";
import hfood from "./routes/hfood.js";
import dotenv from "dotenv";
dotenv.config();



const PORT = process.env.PORT || 5050;
const app = express();

// app.use(cors());
app.use(express.json());
app.use("/hfood", hfood);

app.listen(PORT, () => {
  console.log(`Server:${PORT}`);
});

export default app;