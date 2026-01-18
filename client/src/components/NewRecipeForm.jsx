import { useState, useEffect } from "react";

export default function NewRecipeForm() {
  const [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    async function fetchFoodType() {
      const response = await fetch(`http://localhost:8080/food-types`);
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

    await fetch("http://localhost:8080/new-post", {
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
          <input
            type="text"
            name="content"
            required
            placeholder="Include ingredients and easy to follow instructions "
            value={formValues.content}
            onChange={handleFormChanges}
          />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
