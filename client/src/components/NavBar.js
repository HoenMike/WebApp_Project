import { AppBar, Button, Switch, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

function NavBar({ isAuthenticated, handleLogout, handleLoginDialogOpen }) {
	const [darkMode, setDarkMode] = useState(false);

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
		document.body.style.backgroundColor = darkMode ? "#fff" : "#333";
		document.body.style.color = darkMode ? "#000" : "#fff";
	};

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" style={{ flexGrow: 1 }}>
					Shopping Site
				</Typography>
				<Switch checked={darkMode} onChange={handleDarkModeToggle} />
				{isAuthenticated ? (
					<Button color="inherit" onClick={handleLogout}>
						Sign Out
					</Button>
				) : (
					<Button color="inherit" onClick={handleLoginDialogOpen}>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
