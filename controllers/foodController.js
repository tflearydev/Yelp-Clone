const Shop = require ()

const foodController = {
    show: (req, res) => {
        let{shopId, foodId}=req.params
        Shop.findById(shopId).then(shop =>{
        res.render('foods/show', {foundItem})
    })
},
    new: (req, res) => {
        res.send(`Show a form to create a new food item`)
    },
    create: (req, res) => {
        res.send('Create the new food item in the db')
    },
    edit: (req, res) => {
        res.send(`Show an edit form for the food with id of ${req.params.foodId}`)
    },
    update: (req, res) => {
        res.send(`Update the food item with id of ${req.params.foodId}`)
    },
    delete: (req, res) => {
        res.send(`Delete food item with the id of ${req.params.foodId}`)
    }
}

module.exports = foodController