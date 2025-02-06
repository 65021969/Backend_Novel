require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://novel_6e9f_user:EFDn1uN5y83pjB6BjKgUNEruDSmYswd2@dpg-cui9pvd2ng1s73dqrkug-a.singapore-postgres.render.com/novel_6e9f',
  ssl: {
    rejectUnauthorized: false // บางครั้งต้องเปิดใช้งาน SSL สำหรับการเชื่อมต่อ
  },
  connectTimeoutMillis: 10000 // เพิ่มเวลา timeout ถ้าจำเป็น
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL on Render'))
  .catch(err => console.error('Connection error', err.stack));
