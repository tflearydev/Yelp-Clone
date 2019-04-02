const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController.js')
const foodController = require('../controllers/foodController.js')

// Shop routes
router.get('/', shopController.index)
router.get('/new', shopController.new)
router.post('/', shopController.create)
router.get('/:shopId', shopController.show)
router.get('/:shopId/edit', shopController.edit)
router.put('/:shopId', shopController.update)
router.delete('/:shopId', shopController.delete)

// Food routes
router.get('/:shopId/food/:foodId', foodController.show)
router.get('/:shopId/food/:foodId/edit', foodController.edit)

module.exports = router

const recipeController = require('../controllers/recipeController')
// Recipe routes
router.get('/', recipeController.index)
router.get('/new', recipeController.new)
router.post('/', recipeController.create)
router.get('/:recipeId', recipeController.show)
router.get('/recipeId/edit', recipeController.edit)
router.put('/:recipeId', recipeController.update)
// router.patch('/:recipeId', recipeController.update)
router.delete('/:recipeId', recipeController.delete)
module.exports = router