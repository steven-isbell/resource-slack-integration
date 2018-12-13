import Cohort from '../types/Cohort';
import daysBetween from './daysBetween';
import fetchResource from './fetchResource';

const formatSchedule = (cohorts: Cohort[]): void => {
  cohorts.forEach((cohort: Cohort) => {
    const numberOfDays: number = daysBetween(cohort.date_start, new Date());
    const scheduleWeek: number = Math.floor(numberOfDays / 7);
    const scheduleDay: number = Math.ceil(((numberOfDays / 7) % 1) / 0.14);
    return fetchResource(cohort.slack_name, scheduleWeek, scheduleDay);
  });
};

export default formatSchedule;
