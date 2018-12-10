type Cohort = {
  id: number;
  subject: string;
  date_start: Date;
  date_end: Date;
  short_name: string;
  slack_name?: string;
};

export default Cohort;
