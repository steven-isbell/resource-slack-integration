import buildSlackName from './buildSlackName';
import Cohort from '../types/Cohort';
import query from '../db/query';
import select_active_cohorts from '../db/queries/select_active_cohorts';
import formatSchedule from './formatSchedule';

const fetchCohorts = async (): Promise<Cohort[]> => {
  try {
    const { rows: cohorts }: { rows: Cohort[] } = await query(
      select_active_cohorts
    );
    const nonAsync: Cohort[] = cohorts.filter(
      (cohort: Cohort) => cohort.short_name !== 'WPRAsync'
    );
    const formattedCohorts = buildSlackName(nonAsync);
    formatSchedule(formattedCohorts);
    return formattedCohorts;
  } catch (e) {
    console.error(`Error while fetching cohorts: ${e}`);
    return e;
  }
};

export default fetchCohorts;
