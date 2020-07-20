CREATE TABLE event (
  id serial NOT NULL CONSTRAINT event_pk PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  date timestamp NOT NULL
);
