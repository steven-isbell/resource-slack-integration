import * as resources from '../resources.json';
import postResource from './postResource.js';

const fetchResource = (
  cohort: string = '',
  week: number,
  day: number
): void => {
  const resourceList: string[] = (<any>resources)[week][day];
  resourceList.forEach((resource: string) => postResource(cohort, resource));
};

export default fetchResource;
