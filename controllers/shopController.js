const shopController = {
    index: (req, res) => {
        res.send('Show all shops')
    },
    new: (req, res) => {
        res.send('Show the form for a new shop')
    },
    create: (req, res) => {
        res.send('Create a new shop in the db')
    },
    show: (req, res) => {
        res.send(`Show the shop with the id of ${req.params.shopId}`)
    },
    edit: (req, res) => {
        res.send(`Show a form to edit shop with the id of ${req.params.shopId}`)
    },
    update: (req, res) => {
        res.send('Update the shop in the db')
    },
    delete: (req, res) => {
        res.send(`Deleted the shop with the id of ${req.params.shopId}`)
    }
}

module.exports = shopController