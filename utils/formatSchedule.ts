import Cohort from '../types/Cohort';
import daysBetween from './daysBetween';

const formatSchedule = (cohorts: Cohort[]): any[] => {
  const formattedWithDays: Cohort[] = cohorts.map((cohort: Cohort) => {
    const numberOfDays: number = daysBetween(cohort.date_start, new Date());
    const scheduleWeek: number = Math.floor(numberOfDays / 7);
    const scheduleDay: number = Math.ceil(((numberOfDays / 7) % 1) / 0.14);
    return {
      ...cohort,
      scheduleWeek,
      scheduleDay
    };
  });
  console.log(formattedWithDays);
  return formattedWithDays;
};

export default formatSchedule;
