module.exports = app => {
    const products = require('../controllers/product.controller.js')
    var router = require('express').Router();

    //CREATE
    router.post("/new", products.create);

    //FIND ALL
    router.get("/show", products.findAll);

    //FIND BY ID
    router.get("/show/:id", products.findOne);

    //UPDATE
    router.put("/update/:id", products.update);

    //DELETE
    router.delete("/delete/:id", products.delete);

    app.use('/api/products', router);
};