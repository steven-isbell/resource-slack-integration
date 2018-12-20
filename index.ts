import { config } from 'dotenv';

config();

import job from './utils/cron';
import fetchCohorts from './utils/fetchCohorts';

fetchCohorts();

// job.start();
