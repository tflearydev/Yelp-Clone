const Shop = require('../models/shop')

const shopController = {
    index: (req, res) => {
        Shop.find().then(shops => {
            res.render('index', {shops})
        })
        
    },
    new :(req,res) => {
        res.render('new')
    },
    create:(req,res) => {
        Shop.create(req.body).then(shop => {
            res.redirect('/')
        })
    },
    show :(req,res) => {
        Shop.findById(req.params.shopId).then(shop => {
            res.render('show', {shop})
        })

    },
    edit :(req,res) => {
        Shop.findById(req.params.shopId).then(shop => {
            res.render('edit', {shop})
        })
    },
    update :(req,res) => {
        shop.findByIdAndUpdate(req.params.shopId, req.body, {new: true}).then(() => { 
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

module.exports= shopController