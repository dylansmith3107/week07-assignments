import Welcome from "./Welcome";
import FoodTypes from "./FoodTypes";

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <Welcome />
        <FoodTypes />
      </main>
    </>
  );
}
