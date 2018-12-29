module.exports = {
  MongoDB: {
    connector: "mongodb",
    hostname: process.env.DB_HOST || "mongodb",
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER || "bookshelf",
    password: process.env.DB_PASSWORD,
    database: "bookshelf"
  }
};
