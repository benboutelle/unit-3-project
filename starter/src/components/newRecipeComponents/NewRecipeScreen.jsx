import React from "react";
import "./NewRecipe.css";
import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredients = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName = "";
    setQuantity = "";
  };

  const initialValues = {
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredient: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients

    console.log(values);
  };

  const ingredientsDisplay = ingredients.map(ing=>{
    return(
      <li>
        {ing.quantity} {ing.name}
      </li>
    )
  })
  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(values, handleChange, handleSubmit) => {
          return( <form  className="new-recipe-form" onSubmit={handleSubmit}>
            <input
              placeholder="Name"
              value={values.recipeName}
              onChange={handleChange}
              name="recipeName"
            />
            <input
              placeholder="Image URL"
              value={values.imageURL}
              onChange={handleChange}
              name="imageURl"
            />
            <div>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                />
                <label>Cook</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                />
                <label>Bake</label>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                />
                <label>Drink</label>
              </span>
            </div>

            <input
              placeholder="prep Time"
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"
            />
            <input
              placeholder="Cook Time"
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"
            />
            <input
              placeholder="Serves"
              value={values.serves}
              onChange={handleChange}
              name="serves"
            />
            <h3>ingredients</h3>
            <div>
              <input
                placeholder="Ingredient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Ingrediant Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <ul>{ingredientsDisplay}</ul>

              <button type="button" onClick={() => addIngredients()}>
                Add Another
              </button>
            </div>

            <textarea
              placeholder="Type your instructions"
              value={values.instructions}
              onChange={handleChange}
              name="name"
            ></textarea>

            <button type="submit">Submit!</button>
          </form>)
        }}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
