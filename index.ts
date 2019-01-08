import { config } from 'dotenv';
import winston from 'winston';

config();

import job from './utils/cron';
import fetchCohorts from './utils/fetchCohorts';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

// TODO: Add logging

// TODO: Send setup items for the next day along with resources (e.g. Setup heroku account)?
fetchCohorts();

// job.start();
