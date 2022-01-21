// Update with your config settings.

const sharedConfig = {
  client: 'sqlite3',
  migrations: {
    directory: "./data/migrations"
  },
  seeds: {
    directory: "./data/seeds"
  },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      // runs after a connection is made to the sqlite engine
      conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      filename: './data/recipes.db3'
    },
  },

};
