const db = require("../../data/db-config")

async function getRecipeById(recipe_id) {
  const recipeRows = await db("steps as s")
    .join("recipes as r", "s.recipe_id", "=", "r.recipe_id")
    .join("step_ingredients as si", "s.step_id", "=", "si.step_id")
    .join("ingredients as i", "si.ingredient_id", "=", "i.ingredient_id")
    .select("r.recipe_id", "r.recipe_name", "r.created_at",
      "s.step_id", "s.step_instructions", "s.step_number",
      "i.ingredient_id", "i.ingredient_name", "i.ingredient_unit",
      "si.quantity")
    .where("r.recipe_id", recipe_id)
    .orderBy("s.step_number", "asc")

  const ingredients = recipeRows.map(step => {
    return {
      ingredient_name: step.ingredient_name,
      ingredient_id: step.ingredient_id,
      ingredient_unit: step.ingredient_unit,
      step_number: step.step_number
    }
  })

  let stepTotal = 0
  const uniqueSteps = []

  for (let step of recipeRows) {
    if (stepTotal < step.step_number) {
      stepTotal = step.step_number
      uniqueSteps.push({
        step_id: step.step_id,
        step_number: step.step_number,
        step_instructions: step.step_instructions,
        ingredients: ingredients.filter(ing => {
          return ing.step_number === step.step_number
        })
          .map(step => {
            if (!step.ingredient_id) {
              return []
            } else {
              return {
                ingredient_name: step.ingredient_name,
                ingredient_id: step.ingredient_id,
                ingredient_unit: step.ingredient_unit
              }
            }
          })
      })
    }
  }

  return uniqueSteps
}

module.exports = {
  getRecipeById
}
