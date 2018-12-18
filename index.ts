import { config } from 'dotenv';

config();

import fetchCohorts from './utils/fetchCohorts';

// Export the function for Lambda
module.exports.handleResource = (_: any, __: any, callback: Function) => {
  try {
    fetchCohorts();
  } catch (e) {
    console.error(`Failed to post resource: ${e}`);
    return callback(e);
  }
};
