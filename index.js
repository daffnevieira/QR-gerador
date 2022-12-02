const express = require('express')
const path = require('path')
const app = express()

app.use("/GerarQR", express.static(path.join(__dirname, 'index')))

app.listen(3000, (err) => {
    if (err) {
        console.log("Something's wrong")
    } else {
        console.log("Server running on port:3000")
    }

})