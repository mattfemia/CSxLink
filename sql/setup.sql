
-- residents table
CREATE TABLE public.residents
(
    resident_id uuid NOT NULL,
    firstname character varying(512) NOT NULL,
    lastname character varying(512) NOT NULL,
    program_id uuid NOT NULL,
    linkedin character varying(1024),
    github character varying(1024),
    snake_game character varying(1024),
    chrome_extension character varying(1024),
    solo character varying(1024),
    iteration character varying(1024),
    osp_repo character varying(1024),
    osp_website character varying(1024),
    osp_article character varying(1024),
    reinforcement character varying(1024),
    company_id uuid,
    PRIMARY KEY (resident_id)
);

ALTER TABLE public.residents
    OWNER to postgres;



-- cohorts table
CREATE TABLE public.cohorts
(
    program_id uuid NOT NULL,
    cohort character varying(128) NOT NULL,
    "number" integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    PRIMARY KEY (program_id)
);

ALTER TABLE public.cohorts
    OWNER to postgres;


-- staff table
CREATE TABLE public.staff
(
    staff_id uuid NOT NULL,
    firstname character varying(512) NOT NULL,
    lastname character varying(512) NOT NULL,
    "position" character varying(512) NOT NULL,
    program_id uuid NOT NULL,
    linkedin character varying(1024),
    github character varying,
    PRIMARY KEY (staff_id)
);

ALTER TABLE public.staff
    OWNER to postgres;