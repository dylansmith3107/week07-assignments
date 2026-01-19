import { useState, useEffect } from "react";

export default function NewRecipeForm() {
  const [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    async function fetchFoodType() {
      const response = await fetch(
        `https://week07-assignments.onrender.com/food-types`,
      );
      const data = await response.json();
      console.log(data);
      setFoodTypes(data);
      console.log(data);
    }
    fetchFoodType();
  }, []);

  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    content: "",
    likes: 0,
    foodTypeId: null,
  });

  function handleFormChanges(event) {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues);

    await fetch("https://week07-assignments.onrender.com/new-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formValues }),
    });
  }
  return (
    <>
      <main className="new-recipe-form">
        <h2>Add a new recipe for all to see</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="foodTypeId">
            What food category is your recipe?{" "}
          </label>
          <select name="foodTypeId" required onChange={handleFormChanges}>
            <option value={null} disabled selected>
              Select a category:
            </option>
            {foodTypes.map((foodType) => {
              return (
                <option key={foodType.id} value={foodType.id}>
                  {foodType.food_type_name}
                </option>
              );
            })}
          </select>
          <label htmlFor="title">Recipe title: </label>
          <input
            type="text"
            maxLength={255}
            name="title"
            required
            placeholder="Let us know exactly what your recipe is!"
            value={formValues.title}
            onChange={handleFormChanges}
          />
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            maxLength={255}
            name="author"
            required
            placeholder="Your name"
            value={formValues.author}
            onChange={handleFormChanges}
          />
          <label htmlFor="content">Tell us your recipe: </label>
          <textarea
            className="recipe-form-content"
            id="content"
            name="content"
            rows={24}
            cols={100}
            placeholder="Include ingredients and easy to follow
            instructions"
            required
            value={formValues.content}
            onChange={handleFormChanges}
          />
          <button className="recipe-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
