export default "SELECT * FROM classsession WHERE date_start < NOW() AND date_end > NOW() AND course_code LIKE '%wdim'";
