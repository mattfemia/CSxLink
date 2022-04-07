
-- residents table
CREATE TABLE public.residents
(
    resident_id uuid NOT NULL,
    firstname character varying(512) NOT NULL,
    lastname character varying(512) NOT NULL,
    linkedin character varying(1024),
    github character varying(1024),
    osp character varying(1024),
    company_id uuid,
    PRIMARY KEY (resident_id)
)

TABLESPACE pg_default;

ALTER TABLE public.residents
    OWNER to postgres;

