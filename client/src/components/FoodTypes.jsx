import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function FoodTypes() {
  const [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    async function fetchFoodType() {
      const response = await fetch(
        "https://week07-assignments.onrender.com/food-types",
      );
      const data = await response.json();
      console.log(data);
      setFoodTypes(data);
    }
    fetchFoodType();
  }, []);

  return (
    <>
      <section className="food-type-section">
        {foodTypes.map((foodType) => {
          return (
            <div key={foodType.id} className="food-type">
              <Link
                className="food-type-links"
                to={`/view-recipes/${foodType.food_type_name}`}
              >
                {foodType.food_type_name}
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
