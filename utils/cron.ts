import cron from 'cron';
import fetchCohorts from './fetchCohorts';

const { CronJob } = cron;

const job = new CronJob('00 30 14 * * 1-5', () => {});

export default job;
