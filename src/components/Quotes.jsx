import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Box,
  CircularProgress,
} from "@mui/material";
import { motion } from "framer-motion";

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch quote
  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`);
      setQuote(response.data.slip);
    } catch (error) {
      console.error("Error fetching quote:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #2196F3, #E91E63)",
        color: "#fff",
        padding: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          sx={{
            minWidth: 340,
            maxWidth: 400,
            p: 3,
            textAlign: "center",
            borderRadius: 4,
            boxShadow: 5,
            background: "#fff",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              color="primary"
            >
              💡 Random Advice
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              sx={{ mb: 3, fontStyle: "italic" }}
            >
              {quote ? `"${quote.advice}"` : "Click the button to get advice!"}
            </Typography>

            {loading ? (
              <CircularProgress color="primary" size={24} />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={fetchQuotes}
                sx={{
                  textTransform: "none",
                  fontSize: "16px",
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    backgroundColor: "#1976d2",
                  },
                }}
              >
                Get Advice
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Quotes;
