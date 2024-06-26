const express = require("express");
const cors = require("cors");
const db = require('./app/models');

const app = express();

var corsOptions = {
    origin: ["http://localhost:4200", "http://localhost:8081"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true })
    .then(() => {
        console.log('Database in Sync')
    })
    .catch((err) => {
        console.log('Failed to sync with db', err.message)
    });

app.get("/", (req, res) => {
    res.json({ message: "This is express for angular." });
});

require('./app/routes/product.routes')(app)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});