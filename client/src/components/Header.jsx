import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header>
        <div className="text-logo">
          <img
            className="logo-img"
            src="https://static.vecteezy.com/system/resources/previews/042/979/665/non_2x/cartoon-mixing-bowl-clipart-free-png.png"
            alt="Logo of a cartoon bowl and whisk"
          />
          <h1>Bake It Easy</h1>
        </div>
        <nav>
          <Link className="header-links" to="/">
            Home
          </Link>
          <Link className="header-links" to={`/add-recipe`}>
            Add new recipe
          </Link>
        </nav>
      </header>
    </>
  );
}
