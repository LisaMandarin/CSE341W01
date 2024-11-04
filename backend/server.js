const express = require("express")
const app = express()
const professionalRoute = require("./routes/professional")
const mongodb = require("./db/connect")
const port = 8080

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

mongodb.initDb((err) => {
    if (err) {
        console.log(err)
    } else {
        app.use("/professional", professionalRoute)
        
        app.listen(process.env.PORT || port)
        console.log(`Web server is connected to DB and listening at port ${process.env.PORT || port}`)
    }
})