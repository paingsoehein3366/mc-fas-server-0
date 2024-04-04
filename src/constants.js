module.exports = {
      PORT: process.env.PORT || 8080,
      DB: process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
}