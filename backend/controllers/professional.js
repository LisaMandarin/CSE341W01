const mongodb = require("../db/connect.js")

const getData = async(req, res) => {
    try {
        const result = await mongodb.getDb().db("week1").collection("users").find();
        const lists = await result.toArray()
        
        res.setHeader('Content-Type', "application/json")
        res.status(200).json(lists[0])

    } catch (error) {
        console.error("Failed to get Data from mongodb: ", error.message)
        res.status(500).json({error: "Databases connection failed"})
    }
} 

module.exports = { getData }