import { Box, Button, Container, Grid } from "@mui/material";
import Counter from "./Counter";
import UserForm from "./UserForm";
import RichTextEditor from "./RichTextEditor";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const { logout } = useAuth();

    return (
        <Container maxWidth="lg">
            <Box textAlign="right" mt={2}>
                <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </Box>

            {/* Upper Section with RichTextEditor and Counter */}
            <Grid container spacing={2} sx={{ height: "40vh", mt: 2 }}>
                <Grid item style={{ weight: "65vh" }} >
                    <RichTextEditor />
                </Grid>
                <Grid item xs={{ weight: "35vh" }}>
                    <Counter />
                </Grid>
            </Grid>

            {/* Lower Section with UserForm */}
            <Box sx={{ height: "65vh", mt: 2 }}>
                <UserForm />
            </Box>
        </Container>
    );
};

export default Dashboard;
