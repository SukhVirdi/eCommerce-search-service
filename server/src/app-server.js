const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const  { DB, connection } = require('./db')

const app = express()

connection.connect(err => {
    if(err) {
        return err;
    }
})

console.log(connection)

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
})

app.post("/search", (req, res) => {
    let input = req.body.name;
    const SELECT_SEARCHED_PRODUCTS = ("SELECT * FROM microservices.productdetails WHERE microservices.productdetails.name LIKE '%" + input + "%'")
    connection.query(SELECT_SEARCHED_PRODUCTS, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    })
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));