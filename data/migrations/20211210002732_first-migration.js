
exports.up = async function (knex) {
  return await knex.schema
    .createTable("recipes", table => {
      table.increments("recipe_id")
      table.string("recipe_name", 200)
        .notNullable()
        .unique()
    })
    .createTable("ingredients", table => {
      table.increments("ingredient_id")
      table.string("ingredient_name", 128)
        .notNullable()
        .unique()
      table.string("ingredient_unit", 64)
        
    })
    .createTable("steps", table => {
      table.increments()
    })
    .createTable("step_ingredients", table => {
      table.increments()
    })
};

exports.down = async function (knex) {
  return await knex.schema
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
