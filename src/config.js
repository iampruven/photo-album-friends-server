require('dotenv').config();

module.exports = {

  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres@localhost/photo_album_friends',
  JWT_SECRET:process.env.JWT_SECRET || 'friends_secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '20s',
  HOST: process.env.HOST
}