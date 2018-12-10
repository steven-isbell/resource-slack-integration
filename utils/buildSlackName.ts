import Cohort from '../types/Cohort';

const buildSlackName = (cohorts: Cohort[]): Cohort[] =>
  cohorts.map(
    (cohort: Cohort): Cohort => {
      if (
        cohort.short_name.startsWith('WPX') ||
        cohort.short_name.startsWith('WPR') ||
        cohort.short_name.startsWith('WSL')
      ) {
        return { ...cohort, slack_name: cohort.short_name.toLowerCase() };
      } else {
        const cohortNumber = cohort.short_name.match(/\d+/g);
        return { ...cohort, slack_name: `web-dm${cohortNumber}-dallas` };
      }
    }
  );

export default buildSlackName;
