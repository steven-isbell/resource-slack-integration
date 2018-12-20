import * as resources from '../resources.json';
import postResource from './postResource.js';
import Resource from '../types/Resource.js';

const fetchResource = (
  cohort: string = '',
  week: number,
  day: number
): void => {
  console.log(cohort, week, day);
  const resourceList: Resource[] = (<any>resources)[week][day];
  console.log('resourceList: ', resourceList);
  if (resourceList.length) {
    console.log('Posting Resources', resourceList);
    postResource(cohort, resourceList);
  }
  console.log('No Resources To Post');
  return;
};

export default fetchResource;
