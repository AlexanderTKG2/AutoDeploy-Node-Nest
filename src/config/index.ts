import dotenv from 'dotenv';
dotenv.config();

const config = {
  api: {
    port: Number(process.env.PORT) || 8080,
    root: process.env.API_ROOT || '/api/v1',
  },
  log: {
    level: process.env.LOG_LEVEL || 'debug',
    logToFile: Boolean(process.env.LOG_TO_FILES) || false,
  },
  db: {
    database: process.env.DB_NAME || '',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: (process.env.DB_TYPE || 'sqlite') as 'sqlite',
    logging: false,
    storage: process.env.DB_STORAGE || 'db.sqlite',
    timezone: 'utc', // IMPORTANT For correct timezone management with DB.
  },
};

export default config;
