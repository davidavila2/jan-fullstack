-- -------------------------------------------------------------
-- TablePlus 4.5.2(402)
--
-- https://tableplus.com/
--
-- Database: postgres
-- Generation Time: 2022-01-17 23:56:54.3450
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."Todo" (
    "id" uuid NOT NULL,
    "title" varchar NOT NULL DEFAULT NULL::bpchar,
    "description" varchar DEFAULT NULL::bpchar,
    "status" varchar NOT NULL DEFAULT NULL::bpchar,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."Todo" ("id", "title", "description", "status") VALUES
('2ad9eb42-51fa-44b8-8560-1eedc1ab2dfa', 'Second Todoooo', 'Second Todo Description 2', 'In Progress'),
('a048d87f-5a6e-47bd-855b-4d42918b4374', 'Third Todoooo', 'Third Todo Description', 'Done'),
('c8bb1699-a6ea-4e44-b3fe-e983f62e2fd8', 'First Todooo', 'First Todo Description', 'Open');
