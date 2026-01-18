import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header>
        <h1>Bakery recipes yayyy</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to={`/add-recipe`}>Add new recipe</Link>
        </nav>
      </header>
    </>
  );
}
