import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;
app.listen(PORT, () => {
  console.info(`Server API is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the root route. GET comfy!" });
});

app.get("/food-types", async (req, res) => {
  const query = await db.query(`SELECT id, food_type_name FROM food_type`);
  res.json(query.rows);
});

app.get("/recipes/:foodType", async (req, res) => {
  const { foodType } = req.params;
  const query = await db.query(
    `SELECT recipes.id, recipes.title, recipes.author, recipes.content, recipes.likes, food_type.food_type_name AS foodType FROM recipes JOIN food_type ON recipes.food_type_id = food_type.id WHERE food_type.food_type_name = $1`,
    [foodType]
  );
  res.json(query.rows);
});

app.post("/new-post", (req, res) => {
  const { title, author, content, likes, foodTypeId } = req.body.formValues;
  const query = db.query(
    `INSERT INTO recipes(title, author, content, likes, food_type_id) VALUES($1, $2, $3, $4, $5) RETURNING *`,
    [title, author, content, likes, foodTypeId]
  );
});
