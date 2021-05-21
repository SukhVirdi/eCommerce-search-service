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

app.get('/', (req, res) => {
    console.log("Working")
})

app.get('/search/:searchTerm', (req, res) => {
    let searchTerm = req.params.searchTerm;

    const SELECT_SEARCHED_PRODUCTS = ("SELECT * FROM productdetails WHERE microservices.productdetails.name LIKE '%" + searchTerm + "%'")

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
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));