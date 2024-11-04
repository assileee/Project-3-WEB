const express = require("express");
const app = express();
const port = 3000;
const usersRouter = require("./routes/users.js")
const sqlite3 = require("sqlite3").verbose()


app.use(express.json());
app.use("/api/", usersRouter)

app.get("/", (req, res) => {
	res.json({
		msg: "welcome to my users api ",
	})
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





