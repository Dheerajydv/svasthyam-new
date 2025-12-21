import express from "express"

// Router imports
import authRoutes from "./routes/auth.routes.js"
import connectToDatabase from "./database/connectToDatabase.js";

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.use("/api/auth", authRoutes)

app.listen(port, () => {
  console.log(`Server Running on Port: ${port}`)
})

connectToDatabase();