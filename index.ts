import dotenv from 'dotenv';

dotenv.config();

import cron from './utils/cron';

// Run the process
cron.start();
