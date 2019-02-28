const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController.js')

router.get('/', shopController.index)
router.get('/new', shopController.new)
router.get('/', shopController.create)
router.get('/:shopId', shopController.show)
router.get('/:shopId/edit', shopController.edit)
router.get('/:shopId', shopController.update)
router.get('/:shopId', shopController.delete)

module.exports=router