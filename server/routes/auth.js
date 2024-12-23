const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.create({ username, password });
		res.json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await User.findOne({ where: { username } });
		if (!user) {
			return res.status(400).json({ error: "User not found" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ error: "Invalid credentials" });
		}
		const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
		res.json({ token });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

module.exports = router;
