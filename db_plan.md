# Tables

**NOTES**:

- **PK** = Primary Key
- **FK** =  Foreign Key

## recipes

- **PK** for recipes (recipe_id)
- Recipe name that is **unique** (recipe_name)
- Date of creation (created_at)

## ingredients

- **PK** for ingredients (ingredient_id)
- Ingredient name that is **unique** (ingredient_name)
- Ingredient unit for measurements (ingredient_unit)

## steps

- **PK** for steps (step_id)
- **FK** for related recipe (recipe_id)
- Step number to determine where the step takes place in the recipe (step_number)
- Instructions for each step (step_instructions)

## step_ingredients

- **PK** for step_ingredients (step_ingredient_id)
- **FK** for step (step_id)
- **FK** for ingredient (ingredient_id)
- Quantity of ingredients (quantity)
