import dotenv from 'dotenv';

dotenv.config();

import cron from './utils/cron';
import fetchCohorts from './utils/fetchCohorts';

// cron.start();

fetchCohorts();
