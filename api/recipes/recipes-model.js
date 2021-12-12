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

  return recipeRows
  /*
    select r.recipe_id, r.recipe_name, r.created_at,
    s.step_id, s.step_instructions, s.step_number,
    i.ingredient_id, i.ingredient_name, i.ingredient_unit,
    si.quantity
    from steps as s join recipes as r on s.recipe_id = r.recipe_id
    join step_ingredients as si on s.step_id = si.step_id
    join ingredients as i on si.ingredient_id = i.ingredient_id
    where r.recipe_id = 1
    order by s.step_number asc;
  */
}

module.exports = {
  getRecipeById
}
