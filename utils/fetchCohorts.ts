import buildSlackName from './buildSlackName';
import Cohort from '../types/Cohort';
import formatSchedule from './formatSchedule';
import query from '../db/query';
import select_active_cohorts from '../db/queries/select_active_cohorts';

const fetchCohorts = async (): Promise<void> => {
  try {
    console.log('Fetching Cohorts');
    const { rows: cohorts }: { rows: Cohort[] } = await query(
      select_active_cohorts
    );
    const nonAsync: Cohort[] = cohorts.filter(
      (cohort: Cohort) => cohort.short_name !== 'WPRAsync'
    );
    const formattedCohorts = buildSlackName(nonAsync);
    console.log('Formatting Schedule');
    return formatSchedule(formattedCohorts);
  } catch (e) {
    console.error(`Error while fetching cohorts: ${e}`);
    return e;
  }
};

export default fetchCohorts;
