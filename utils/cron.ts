import cron from 'cron';
import fetchCohorts from './fetchCohorts';

const { CronJob } = cron;

// Run the process Monday - Friday at 1:30 PM
const job = new CronJob('00 30 14 * * 1-5', () => {
  fetchCohorts();
});

export default job;
