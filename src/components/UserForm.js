import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const UserForm = () => {
    const [user, setUser] = useState({
        id: Date.now(),
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    // Load saved user data from local storage
    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem("userData"));
        if (savedUser) setUser(savedUser);
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // Save user data
    const handleSubmit = () => {
        localStorage.setItem("userData", JSON.stringify(user));
        alert("User data saved!");
    };

    return (
        <Box style={{ height: "60vh" }}>
            <Typography variant="h5">User Data Form</Typography>
            <TextField label="Name" name="name" fullWidth margin="normal" value={user.name} onChange={handleChange} />
            <TextField label="Email" name="email" fullWidth margin="normal" value={user.email} onChange={handleChange} />
            <TextField label="Phone" name="phone" fullWidth margin="normal" value={user.phone} onChange={handleChange} />
            <TextField label="Address" name="address" fullWidth margin="normal" value={user.address} onChange={handleChange} />
            <Button onClick={handleSubmit} variant="contained" color="primary">Save</Button>
        </Box>
    );
};

export default UserForm;