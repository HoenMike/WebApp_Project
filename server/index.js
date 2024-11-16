const express = require("express");
const cors = require("cors");
const db = require("./models");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log("Server is running on port 3001");
	});
});
