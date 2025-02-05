import { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return (
        <Container maxWidth="xs">
            <Box textAlign="center" mt={5}>
                <Typography variant="h4">Login</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <TextField label="Username" fullWidth margin="normal" onChange={(e) => setUsername(e.target.value)} />
                <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
            </form>
        </Container>
    );
};

export default Login;
