const express = require("express")

const Person = require("../models/person")

const router = express.Router()

// INDEX
// GET

router.get("/people", (req, res, next) => {
    Person.find()
        .then(people => {
            return people.map(person => person)
        })
        .then(people => {
            res.status(200).json({ people: 
                people })
        })
        .catch(next)
})

// SHOW
// GET /people/:id
router.get("/people/:id", (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            res.status(200).json({ person: 
            person })
        })
        .catch(next)
})

// CREATE
// POST /people
router.post("/people", (req, res, next) => {
    Person.create(req.body.person)
        .then(person =>
            {
                res.status(201).json({ person: 
                person })
            })
            .catch(next)
})

module.exports = router