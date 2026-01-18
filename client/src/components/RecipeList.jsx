import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

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

    const pollingInterval = setInterval(fetchRecipes, 5000);

    return () => clearInterval(pollingInterval);
  }, [foodType]);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <main className="recipe-list">
        {recipes.map((recipe) => {
          return (
            <div className="recipe-div" key={recipe.id}>
              <h2>{recipe.title}</h2>
              <h3>By {recipe.author}</h3>
              <p>Likes: {recipe.likes}</p>
              <button
                className="recipe-list-btn"
                onClick={() => setIsVisible(!isVisible)}
              >
                Show more/less
              </button>
              {isVisible && <p>{recipe.content}</p>}
            </div>
          );
        })}
      </main>
    </>
  );
}
