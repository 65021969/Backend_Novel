const express = require('express');
const { Client } = require('pg');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080; // ใช้พอร์ตที่ Render กำหนดให้

// Middleware
app.use(cors());
app.use(bodyParser.json());

const client = new Client({
  connectionString: process.env.DATABASE_URL, // ใช้ env variable เพื่อความปลอดภัย
  ssl: {
    rejectUnauthorized: false
  },
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL on Render'))
  .catch(err => console.error('Connection error', err.stack));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get("/novel", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.userinfo ORDER BY user_id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
