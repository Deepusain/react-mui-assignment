import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Typography } from "@mui/material";

const RichTextEditor = () => {
    const [content, setContent] = useState(localStorage.getItem("editorData") || "");

    const handleChange = (value) => {
        setContent(value);
        localStorage.setItem("editorData", value);
    };

    return (
        <Box
            sx={{
                top: 0,
                left: 0,
                height: "35vh",
                width: "100vh",
                padding: "10px,10px,10px,10px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
            }}
        >
            <Typography variant="h5" gutterBottom>
                Rich Text Editor
            </Typography>
            <ReactQuill value={content} onChange={handleChange} style={{ height: "20vh" }} />
        </Box>
    );
};

export default RichTextEditor;
