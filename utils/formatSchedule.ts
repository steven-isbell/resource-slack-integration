import Cohort from '../types/Cohort';
import daysBetween from './daysBetween';
import fetchResource from './fetchResource';

// TODO: Handle holidays
const formatSchedule = (cohorts: Cohort[]): void => {
  cohorts.forEach((cohort: Cohort) => {
    const numberOfDays: number = daysBetween(cohort.date_start, new Date());
    const scheduleWeek: number = Math.ceil(numberOfDays / 7);
    const scheduleDay: number = Math.round(((numberOfDays / 7) % 1) / 0.14);
    console.log('scheduleDay: ', ((numberOfDays / 7) % 1) / 0.14);
    console.log(scheduleDay);
    console.log('Fetching Resources');
    return fetchResource(cohort.slack_name, scheduleWeek, scheduleDay);
  });
};

export default formatSchedule;
