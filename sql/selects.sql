SELECT r.*, c.cohort, c.number
FROM residents r
INNER JOIN cohorts c
ON r.program_id=c.program_id WHERE resident_id='insert uuid';