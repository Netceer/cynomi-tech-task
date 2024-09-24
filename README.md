
# Sleep Tracker App

This is the Sleep Tracker application tech task.

## Run Locally

### Server

- Clone repo
- Navigate to server application `cd /server` in terminal
- Install dependencies by running `npm i` in terminal
- Start the DB (Postgresql) container with `docker compose up`
- Create .env file and put the following definition for DB url
  ```js
  DATABASE_URL = "postgresql://root:root@localhost:5432/sleeper"
  PGUSER="root"
  PGPASSWORD="root"
  PGHOST="localhost"
  PGPORT="5432"
  PGDATABASE="sleeper"
  PORT="5002"
  ```
- Populate database by running `npm run seed`
- Finally start the server with `npm run dev`

### Client

- Navigate to client application folder `cd /client`
- Install dependencies by running `npm i`
- Run `npm run dev` in terminal

### Screenshots 

Add entry page:
![Entry form](https://github.com/user-attachments/assets/bcd7229d-61d9-47b4-aed6-a5a46d7121c0)

Table of entries overview:
![Entries table](https://github.com/user-attachments/assets/e00327dc-187d-44f0-a6bc-e9b9d23a7a30)

### Additonal features and improvements

## General
- Implement third requirement of graphs showing last 7 days of sleep entries for a specific user
- Write unit and e2e tests
- Properly type data returned from database and responses received from server
- Remove unused packages
- Add code comments
- Have a real commit history with incremental changes
- Don't hardcode fetch end points but instead use PROD or DEV env variables to determine endpoints
- Have login system so users can have certain fields prefilled to speed up adding many records in a row
- Have a way to idenfity unique users e.g userID tied to a user account, simply an email

## Frontend
- Add reset form button
- Add loading state after submitting form
- Show error message if server requests iareunsuccessful in UI and not just in console
- Add light mode
- Use React Helmet to add more header properties
- Add favicon
- Run Google lighthouse to improve performance, accessbility, best practices and SEO
- Make table sortable and ability to filter
- Provide 404 page or redirect routes that are not handled
- Test on mulitple browsers across different operating systems
- Test on range of mobile devices and screen resolutions
- Allow for hour and minute input instead of relying on fractional hours

## Backend
- Upsert records instead of allowing for mulitple entries from same day and user (entries are not counted multiple times)
- Validate incoming request data and respond with useful error messages
- Sanitise data before adding to database
- Add authorsation to not allow anyone to send requests
- Make handlers follow try catch pattern and handle errors properly
- Create and use models instead of only using writing raw SQL queries.  
