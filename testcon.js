const express = require('express');
const { Client } = require('pg');
const dotenv = require('dotenv');

// โหลดค่าต่างๆ จากไฟล์ .env
dotenv.config();

const app = express();

// เชื่อมต่อกับ PostgreSQL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  connectTimeoutMillis: 10000,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL on Render'))
  .catch(err => console.error('Connection error', err.stack));

// กำหนดให้แอปพลิเคชันรันที่พอร์ตที่เหมาะสม
const PORT = process.env.PORT || 3000; // ใช้พอร์ตจาก environment variable หรือ 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
