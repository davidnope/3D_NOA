const path = require('path');

const controller = {
    listView: (req,res)=>{
        res.render('list-products')
    }
}

module.exports = controller;