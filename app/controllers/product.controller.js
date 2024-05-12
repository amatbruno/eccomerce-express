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
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

    Product.findAll({ where: condition })
        .then((data) => {
            res.send(data)
        }).catch((err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        }));
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find product with id: ${id}.`
                });
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the tutorial."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Product.update(req.body, { where: id })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Product updated succesfully'
                })
            } else {
                res.send({
                    message: `Unable to update tutorial with ${id}`
                })
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while updating the tutorial."
            });
        });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({ where: { id: id } })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: 'Product deleted succesfully'
                })
            } else {
                res.send({
                    message: `Unable to delete tutorial with ${id}`
                })
            }
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while deleting the tutorial."
            });
        });
};