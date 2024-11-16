import { Alert, Button, Card, CardContent, Snackbar, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "linear-gradient(to right, #ff7e5f, #feb47b)",
	},
	card: {
		minWidth: 275,
		padding: "20px",
	},
});

function SignUp() {
	const classes = useStyles();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [open, setOpen] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleSignUp = async () => {
		try {
			await axios.post("http://localhost:3001/auth/register", {
				username,
				password,
			});
			navigate("/login");
		} catch (error) {
			setErrorMessage("Sign-up failed: " + error.response.data.error);
			setOpen(true);
		}
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant="h4" component="h1" gutterBottom>
						Sign Up
					</Typography>
					<TextField
						label="Username"
						variant="outlined"
						fullWidth
						margin="normal"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						fullWidth
						margin="normal"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
						Sign Up
					</Button>
				</CardContent>
			</Card>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
					{errorMessage}
				</Alert>
			</Snackbar>
		</div>
	);
}

export default SignUp;
