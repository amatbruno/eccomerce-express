const db = require("../models");
const Product = db.products;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        onSale: req.body.onSale,
        date: req.body.date,
        imageUrl: req.body.imageUrl,
    }

    Product.create(product)
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Error occurred while creating the product."
            });
        });
}

exports.findAll = (req, res) => {
};

exports.findOne = (req, res) => {
};

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
};

exports.deleteAll = (req, res) => {
};

exports.findAllPublished = (req, res) => {
};