function getRecipeById(recipe_id) {
  return Promise.resolve(`awesome recipes from recipe ${recipe_id}`)
}

module.exports = {
  getRecipeById
}
