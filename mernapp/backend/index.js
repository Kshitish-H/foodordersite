const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoDB = require('./db');

dotenv.config();
const app = express();
const port = 5000;

// Connect to MongoDB
mongoDB();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Middleware to parse JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', require('./Routes/CreatUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/unsplashRoute'));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// const express = require('express');
// const app = express();
// const port = 5000;
// const mongoDB = require('./db');

// const startServer = async () => {
//     try {
//         await mongoDB();
//         console.log("MongoDB connected successfully.");
//         app.use(express.json());

//         app.get('/', (req, res) => {
//             res.send('Hello World!');
//         });

//         app.use('/api', require('./Routes/CreatUser'));

//         app.listen(port, () => {
//             console.log(`Example app listening on port ${port}`);
//         });

//     } catch (error) {
//         console.error("Failed to connect to MongoDB", error);
//         process.exit(1); 
//     }
// };

// // --- Run the server ---
// startServer();



