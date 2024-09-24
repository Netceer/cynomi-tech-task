import pg from "pg";
import { readFileSync } from "fs";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const seedQuery = readFileSync("src/db/seeding.sql", { encoding: "utf8" });

pool.query(seedQuery, (err, res) => {
  console.log(err, res);
  console.log("Seeding complete");
  pool.end();
});
