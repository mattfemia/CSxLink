-- SELECT * information from resident table for a given resident
SELECT r.*, c.cohort, c.number
FROM residents r
INNER JOIN cohorts c
ON r.program_id=c.program_id 
WHERE resident_id='insert uuid';

-- SELECT * cohorts and display number of users in each cohort
SELECT COUNT(r.resident_id), c.cohort, c.number
FROM residents r
INNER JOIN cohorts c
ON r.program_id=c.program_id
GROUP BY r.program_id, r.resident_id, c.program_id
ORDER BY c.number asc

-- SELECT resident data including cohort info for specific resident
SELECT r.scratch, r.*,  c.cohort AS cohortProgram, c.number AS cohortNumber
FROM residents r
INNER JOIN cohorts c
ON r.program_id=c.program_id
WHERE resident_id='insert uuid';

