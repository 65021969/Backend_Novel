const express = require('express');
const { Client } = require('pg');
const app = express();
const port = process.env.PORT || 8080; // ใช้พอร์ตที่ Render กำหนดให้

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
