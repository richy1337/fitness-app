import express from "express";
import cors from "cors";
import calorie from "./calorie.js";


const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
}; 
app.use(cors(corsOptions))


app.get("/calculate", async (req, res) => {
  const { age, weight, height, gender, activity_level, goal, equation } = req.query

  try {
    const calorieData = await calorie({ age, weight, height, gender, activity_level, goal, equation })
    res.json(calorieData)
  } catch(error) {
    console.error('Error: ', error.message);
    res.status(500).json({ error: 'Failed to fetch calorie data' })
  }
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
