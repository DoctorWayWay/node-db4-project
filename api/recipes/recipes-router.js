const router = require("express").Router()
const Recipes = require("./recipes-model")

// [GET] - /api/recipes/:recipe_id
router.get("/:recipe_id", async (req, res, next) => {
  const { recipe_id } = req.params
  const recipes = await Recipes.getRecipeById(recipe_id)
  try {
    res.status(200).json(recipes)
  } catch (err) {
    next(err)
  }
})

module.exports = router
