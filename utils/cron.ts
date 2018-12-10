import cron from 'cron';

const { CronJob } = cron;

const job = new CronJob('00 30 14 * * 1-5', () => {});

export default job;
