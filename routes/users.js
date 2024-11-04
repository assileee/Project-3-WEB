const express = require("express");
const router = express.Router();
const db = require("../database");
const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersControllers");

router.get("/users", getAllUsers);

router.post("/users", createNewUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

router.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const userId = users.findIndex((user) => user.id === id);

  if (userId < 0) return res.status(404).json({ msg: "user not found" });

  res.json(users[userId]);
});

module.exports = router;
