const daysBetween = (date1: Date, date2: Date): number => {
  // The number of milliseconds in one day
  const ONE_DAY: number = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  const date1_ms: number = date1.getTime();
  const date2_ms: number = date2.getTime();

  // Calculate the difference in milliseconds
  const difference_ms: number = Math.abs(date1_ms - date2_ms);

  // Convert back to days and return
  const days: number = Math.round(difference_ms / ONE_DAY);

  return days;
};

export default daysBetween;
