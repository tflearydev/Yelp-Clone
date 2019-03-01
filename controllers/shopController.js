const Shop = require('../models/Shop')

const shopController = {
    index: (req, res) => {
        Shop.find()
        .then(shops => {
            res.render('shops/index', {shops})
        })
    },
    new: (req, res) => {
        res.render('shops/new')
    },
    create: (req, res) => {
        res.send('Create a new shop in the db')
    },
    show: (req, res) => {
        Shop.findById(req.params.shopId).then((shop) => {
            res.render('shops/show', {shop})
        })
    },
    edit: (req, res) => {
        Shop.findById(req.params.shopId).then((shop) => {
            res.render('shops/edit', {shop})
        })
    },
    update: (req, res) => {
        Shop.findByIdAndUpdate(req.params.shopId, req.body, {new: true}).then((updatedShop) => {
            res.redirect(`/${req.params.shopId}`)
        })
    },
    delete: (req, res) => {
        Shop.findByIdAndDelete(req.params.shopId).then(() => {
            console.log(`Donut with id of ${req.params.shopId}`)
            res.redirect('/')
        })
    }
}

module.exports = shopController