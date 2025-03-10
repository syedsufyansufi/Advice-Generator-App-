import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Container, Box } from "@mui/material";

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  // Function to fetch quote
  const fetchQuotes = async () => {
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`);
      setQuote(response.data.slip);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Card sx={{ minWidth: 300, p: 2, textAlign: "center", boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Random Advice
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
              {quote ? quote.advice : "Click the button to get advice!"}
            </Typography>
            <Button variant="contained" color="primary" onClick={fetchQuotes}>
              Get Advice
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Quotes;
