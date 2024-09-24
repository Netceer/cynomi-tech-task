DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS sleep_entries;

CREATE TABLE users (
  "id" uuid DEFAULT gen_random_uuid () NOT NULL PRIMARY KEY ,
  "name" text NOT NULL,
  "gender" text NOT NULL
);

CREATE TABLE sleep_entries (
  "id" uuid DEFAULT gen_random_uuid () NOT NULL PRIMARY KEY,
  "userID" uuid NOT NULL,
  "hoursSlept" INT NOT NULL,
  "date" DATE NOT NULL,
  FOREIGN KEY ("userID") REFERENCES users ("id") ON DELETE CASCADE
);


INSERT INTO users ("id", "name", "gender")
VALUES ('eb369681-ef13-4270-85f5-326cdf618e49', 'John', 'Male' );

INSERT INTO sleep_entries ("userID", "hoursSlept", "date")
VALUES ('eb369681-ef13-4270-85f5-326cdf618e49', 8, '2024-09-30');

