const express = require("express")
const router = express.Router()

const usersArray = [
	{
		userName: "Alice",
		lastName: "Johnson",
		age: 30,
		address: {
			street: "Oak Avenue",
			number: 45,
			house: true,
		},
		role: "Software Engineer",
	},
	{
		userName: "Charlie",
		lastName: "Smith",
		age: 27,
		address: {
			street: "Maple Street",
			number: 101,
			house: false,
		},
		role: "Project Manager",
	}
]

// GET METHOD
router.get("/users", (req, res) => {
    res.json(usersArray)
})

// POST METHOD
router.post("/", (req, res) => {
	const { firstName, lastName } = req.body

	res.status(201).json({
		msg: "This the message from POST ",
		firstName,
		lastName,
	})
})

// PUT METHOD
router.put("/", (req, res) => {
    const { firstname, lastname } = req.body; 
    res.json({
        msg: "This is the message from PUT",
        firstname,
        lastname,
    });
});

// DELETE METHOD
router.delete("/:id", (req, res) => {
    const {id} =req.params

	res.json({
		msg: "This the message from DELETE ",
        id
	})
})

module.exports = router