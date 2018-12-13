import * as resources from '../resources.json';
import postResource from './postResource.js';
import Resource from '../types/Resource.js';

const fetchResource = (
  cohort: string = '',
  week: number,
  day: number
): void => {
  const resourceList: Resource[] = (<any>resources)[week][day];
  if (resourceList.length) {
    postResource(cohort, resourceList);
  }
  return;
};

export default fetchResource;
