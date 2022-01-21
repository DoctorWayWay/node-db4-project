const recipes = [
  { recipe_name: "Chicken Noodle Soup" },
  { recipe_name: "Chicken Tacos" },
  { recipe_name: "Chicken Sandwich" },
]

const ingredients = [
  { ingredient_name: "Chicken", ingredient_unit: "lbs" },
  { ingredient_name: "Noodles", ingredient_unit: "lbs" },
  { ingredient_name: "Tortilla", ingredient_unit: "oz" },
  { ingredient_name: "Bread", ingredient_unit: "oz" },
  { ingredient_name: "Bacon", ingredient_unit: "lbs" },
  { ingredient_name: "Cheese", ingredient_unit: "oz" },
  { ingredient_name: "Carrots", ingredient_unit: "lbs" },
  { ingredient_name: "Celery", ingredient_unit: "oz" },
]

const step_ingredients = [
  // Chicken Noodle Soup
  { step_id: 1, ingredient_id: 1, quantity: 2 },
  { step_id: 1, ingredient_id: 2, quantity: 0.5 },
  { step_id: 2, ingredient_id: 7, quantity: 0.4 },
  { step_id: 2, ingredient_id: 8, quantity: 4 },
  { step_id: 3, ingredient_id: 1, quantity: 2 },
  { step_id: 3, ingredient_id: 2, quantity: 0.5 },
  { step_id: 3, ingredient_id: 7, quantity: 0.4 },
  { step_id: 3, ingredient_id: 8, quantity: 4 },
  // Chicken Tacos
  { step_id: 4, ingredient_id: 1, quantity: 1 },
  { step_id: 4, ingredient_id: 3, quantity: 4 },
  { step_id: 5, ingredient_id: 6, quantity: 2 },
  { step_id: 6, ingredient_id: 1, quantity: 1 },
  { step_id: 6, ingredient_id: 3, quantity: 4 },
  { step_id: 6, ingredient_id: 6, quantity: 2 },
  // Chicken Sandwich
  { step_id: 7, ingredient_id: 1, quantity: 1 },
  { step_id: 7, ingredient_id: 5, quantity: 0.5 },
  { step_id: 8, ingredient_id: 4, quantity: 4 },
  { step_id: 9, ingredient_id: 1, quantity: 1 },
  { step_id: 9, ingredient_id: 5, quantity: 0.5 },
  { step_id: 9, ingredient_id: 4, quantity: 4 },
]

const steps = [
  // Chicken Noodle Soup
  { step_instructions: "Boil chicken and noodles separately", step_number: 1, recipe_id: 1 },
  { step_instructions: "Roast celery and carrots", step_number: 2, recipe_id: 1 },
  { step_instructions: "Combine all ingredients into large pot", step_number: 3, recipe_id: 1 },
  // Chicken Tacos
  { step_instructions: "Cook chicken and heat torillas on pan", step_number: 1, recipe_id: 2 },
  { step_instructions: "Put chicken and cheese into the tortilla", step_number: 2, recipe_id: 2 },
  { step_instructions: "Place on heated pan until cheese has melted", step_number: 3, recipe_id: 2 },
  // Chicken Sandwich
  { step_instructions: "Fry bacon and cook chicken", step_number: 1, recipe_id: 3 },
  { step_instructions: "Toast bread until golden brown", step_number: 2, recipe_id: 3 },
  { step_instructions: "Combine all ingredients into a sandwich", step_number: 3, recipe_id: 3 },
]
exports.seed = async function (knex) {
  await knex("recipes").insert(recipes)
  await knex("ingredients").insert(ingredients)
  await knex("steps").insert(steps)
  await knex("step_ingredients").insert(step_ingredients)
}
