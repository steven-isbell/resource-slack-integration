const buildSlackName = (cohortName: string) => {
  if (cohortName.startsWith('WPX') || cohortName.startsWith('WPR')) {
    return cohortName.toLowerCase();
  } else {
    const number = cohortName.substr(3, 5);
    return `web-dm${number}-dallas`;
  }
};

export default buildSlackName;
