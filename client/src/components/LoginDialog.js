import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

function LoginDialog({ open, onClose, onLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		onLogin(username, password);
		onClose();
	};

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>Login</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					label="Username"
					type="text"
					fullWidth
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					margin="dense"
					label="Password"
					type="password"
					fullWidth
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button onClick={handleLogin}>Login</Button>
			</DialogActions>
		</Dialog>
	);
}

export default LoginDialog;
