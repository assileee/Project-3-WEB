const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg: "This the message"
    })
})

// POST METHOD
app.post("/", (req, res) => {
	const { firstName, lastName } = req.body

	res.status(201).json({
		msg: "This the message from POST ",
		firstName,
		lastName,
	})
})

// PUT METHOD
app.put("/", (req, res) => {
    const { firstname, lastname } = req.body; 
    res.json({
        msg: "This is the message from PUT",
        firstname,
        lastname,
    });
});

// DELETE METHOD
app.delete("/:id", (req, res) => {
    const {id} =req.params

	res.json({
		msg: "This the message from DELETE ",
        id
	})
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//Open your browser and go to http://localhost:3000. 
// You should see the message "Welcome to our simple REST API!"



