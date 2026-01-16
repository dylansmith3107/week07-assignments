import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function RecipeList() {
  let { foodType } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(`http://localhost:8080/recipes/${foodType}`);
      const data = await response.json();
      console.log(data);
      setRecipes(data);
    }
    fetchRecipes();
  }, [foodType]);

  return (
    <>
      {recipes.map((recipe) => {
        return (
          <div className="recipe-div" key={recipe.id}>
            <h2>{recipe.title}</h2>
            <h3>By {recipe.author}</h3>
            <p>Likes: {recipe.likes}</p>
          </div>
        );
      })}
    </>
  );
}
