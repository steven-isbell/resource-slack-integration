import dotenv from 'dotenv';

dotenv.config();

import cron from './utils/cron';

cron.start();
