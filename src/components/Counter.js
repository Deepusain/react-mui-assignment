import { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { animated, useSpring } from "react-spring";
import "react-quill/dist/quill.snow.css";

const Counter = () => {
    // Load count from localStorage or default to 0
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem("counterValue");
        return savedCount !== null ? parseInt(savedCount, 10) : 0;
    });

    // Update localStorage when count changes
    useEffect(() => {
        localStorage.setItem("counterValue", count);
    }, [count]);

    // Background animation 
    const backgroundAnimation = useSpring({
        backgroundColor: `rgba(0, 150, 136, ${count / 10})`,
        config: { tension: 180, friction: 22, clamp: true },
    });

    // Reset Function (Instant Reset Effect)
    const handleReset = () => {
        setCount(0);
        localStorage.setItem("counterValue", "0"); 
    };

    return (
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "20px,0px,20px,20px" }}>
            {/* Counter Box */}
            <animated.div
                style={{
                    ...backgroundAnimation,
                    width: "30vw",
                    height: "35vh",
                    borderRadius: "12px",
                    boxShadow: "2px 4px 10px rgba(0,0,0,0.2)",
                    padding: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box style={{ textAlign: "center", alignItems: "center", justifyContent: "flex-end" }}>
                    <Typography variant="h5">Counter: {count}</Typography>
                    <Button onClick={() => setCount(count + 1)} variant="contained" color="primary" sx={{ m: 1 }}>
                        Increment
                    </Button>
                    <Button onClick={handleReset} variant="contained" color="error" sx={{ m: 1 }}>
                        Reset
                    </Button>
                    <Button onClick={() => setCount(count - 1)} variant="contained" color="secondary" sx={{ m: 1 }}>
                        Decrement
                    </Button>
                </Box>
            </animated.div>

        </div>
    );
};

export default Counter;
