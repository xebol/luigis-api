// load .env data into process.env
require("dotenv").config();

// other dependencies
const fs = require("fs");
const db = require("../db/connection");

// Loads the schema files from db/schema
const runSchemaFiles = async() => {
  console.log(`-> Loading Schema Files ...`);
  const schemaFilenames = fs.readdirSync("./db/schema");
  console.log("Schema Filename", schemaFilenames);
  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, "utf8");
    console.log(`-> Running`);
    console.log("SQL", sql);
    await db.query(sql).then(() => {
      console.log("Seeded Succesfully");
    });
  }
};

const runSeedFiles = async() => {
  console.log(`-> Loading Seeds ...`);
  const schemaFilenames = fs.readdirSync("./db/seeds");
  console.log("Seed Schema Filenames", schemaFilenames);
  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, "utf8");
    console.log(`-> Running `);
    console.log("Seeds SQL", sql);
    await db.query(sql);
  }
};

const runResetDB = async() => {
  try {
    process.env.DB_HOST &&
      console.log(
        `-> Connecting to PG on ${process.env.DB_HOST} as ${process.env.DB_USER}...`
      );

    await runSchemaFiles();
    await runSeedFiles();
    console.log("Exiting process");
    process.exit();
  } catch (err) {
    console.error(`Failed due to error: ${err}`);
    process.exit();
  }
};

runResetDB();
