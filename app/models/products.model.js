module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        description: {
            type: Sequelize.STRING
        },
        onSale: {
            type: Sequelize.BOOLEAN
        },
        date: {
            type: Sequelize.STRING
        },
        imageUrl: {
            type: Sequelize.STRING
        }
    });

    return Product;
};