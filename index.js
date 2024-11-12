const express = require("express");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")
const sqlite3 = require("sqlite3").verbose()


app.use(express.json());

// MIDDLEWARE
app.use(express.json())
// CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
    )
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next()
})

app.use("/api/", usersRouter)

app.get("/", (req, res) => {
	res.json({
		msg: "welcome to my users api ",
	})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





