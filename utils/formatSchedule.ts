import Cohort from '../types/Cohort';
import daysBetween from './daysBetween';

const formatSchedule = (cohorts: Cohort[]): any[] => {
  const formattedWithDays: Cohort[] = cohorts.map((cohort: Cohort) => {
    return {
      ...cohort,
      numberOfDays: daysBetween(cohort.date_start, cohort.date_end)
    };
  });

  //   return formattedWithDays;
};

export default formatSchedule;
