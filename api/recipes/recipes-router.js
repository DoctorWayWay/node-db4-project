const router = require("express").Router()

router.get("/", (req, res, next) => {
  try {
    res.status(200).json({ message: "it really really works!" })
  } catch (err) {
    next(err)
  }
})

module.exports = router
