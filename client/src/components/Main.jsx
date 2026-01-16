import { Routes, Route } from "react-router";
import HomePage from "./HomePage";
import RecipeList from "./RecipeList";

export default function Main() {
  return (
    <>
      <main>
        <Routes>
          <Route element={<HomePage />} path={"/"} />
          <Route element={<RecipeList />} path={"/:foodType"} />
        </Routes>
      </main>
    </>
  );
}
