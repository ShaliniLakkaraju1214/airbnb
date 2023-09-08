const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});