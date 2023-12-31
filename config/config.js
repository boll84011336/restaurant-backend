const { MYSQL_HOST, MYSQL_PORT, MYSQL_USERNAME, MYSQL_PASSWORD } = process.env;

module.exports = {
  "development": {
    "username": MYSQL_USERNAME || 'root',
    "password": MYSQL_PASSWORD,
    "database": "database_development_restaurant",
    "host": MYSQL_HOST || '127.0.0.1',
    "dialect": "mysql",
    "port": MYSQL_PORT,
  },
  "test": {
    "username": MYSQL_USERNAME,
    "password": MYSQL_PASSWORD,
    "database": "database_test",
    "host": MYSQL_HOST,
    "dialect": "mysql",
    "port": MYSQL_PORT,
  },
  "production": {
    "username": MYSQL_USERNAME,
    "password": MYSQL_PASSWORD,
    "database": "database_production",
    "host": MYSQL_HOST,
    "dialect": "mysql",
    "port": MYSQL_PORT,
  }
}