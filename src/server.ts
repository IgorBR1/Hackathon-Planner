import app from "@/app";
import "dotenv/config";
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.send("FIAP <br> FULL STACK DEVELOPMENT <br> HACKATHON PLANNER");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));