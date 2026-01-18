import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import RecipeList from "./RecipeList";
import NewRecipeForm from "./NewRecipeForm";

export default function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route element={<RecipeList />} path={"/view-recipes/:foodType"} />
          <Route element={<NewRecipeForm />} path={"/add-recipe"} />
        </Routes>
      </main>
    </>
  );
}
