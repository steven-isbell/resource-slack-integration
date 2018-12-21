import { config } from 'dotenv';

config();

import job from './utils/cron';
import fetchCohorts from './utils/fetchCohorts';

// TODO: Send setup items for the next day along with resources (e.g. Setup heroku account)?
fetchCohorts();

// job.start();
