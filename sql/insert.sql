
-- Dummy insert for residents table
INSERT INTO public.residents(
	resident_id, firstname, lastname, program_id, linkedin, github, snake_game, chrome_extension, 
	solo, iteration, osp_repo, osp_website, osp_article, reinforcement, company_id)
	VALUES ('insert-uuid', Matt, Femia, 'insert-uuid', 
	'www.linkedin.com/in/mattfemia', 'www.github.com/mattfemia', 'https://github.com/mattfemia/unit-4-snake', 
	'https://github.com/mattfemia/excuse-me', 'https://github.com/mattfemia/CSxLink', 
	null, null, null, null, null, null);

-- Dummy insert for cohorts table
INSERT INTO public.cohorts(
	program_id, cohort, "number", start_date, end_date)
	VALUES ('insert-uuid', 'NY', 32, '2022-03-07', '2022-06-06');

INSERT INTO public.cohorts(
	program_id, cohort, "number", start_date, end_date)
	VALUES ('insert-uuid', 'NY', 31, '2022-01-10', '2022-04-11');


-- Dummy insert for staff table
INSERT INTO public.staff(
	staff_id, firstname, lastname, "position", program_id, linkedin, github)
	VALUES ('insert-uuid', 'Tony', 'Meatballs', 'Lead Instructor', 
	'insert-uuid', null, null);