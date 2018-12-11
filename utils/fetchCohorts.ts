import buildSlackName from './buildSlackName';
import Cohort from '../types/Cohort';
import query from '../db/query';
import select_active_cohorts from '../db/queries/select_active_cohorts';

const fetchCohorts = async (): Promise<Cohort[]> => {
  try {
    const { rows: cohorts }: { rows: Cohort[] } = await query(
      select_active_cohorts
    );
    const formattedCohorts = buildSlackName(cohorts);
    return formattedCohorts;
  } catch (e) {
    console.error(`Error while fetching cohorts: ${e}`);
    return e;
  }
};

export default fetchCohorts;
