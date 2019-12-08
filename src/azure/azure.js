/*
    Author: Kevin Lu 
    Date: 12/6/2019
    File: azureConnect.js
    Purpose: Connecting to Azure serverless from entering necessary credentials.
    Modification: N/A
*/

import { sqlCommand } from "./DBProject/csci-435-frontend/src/components/search/Search.js";

const { Connection, Request } = require("tedious");

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "chrisk13", // update me
      password: "yankees13!" // update me
    },
    type: "default"
  },
  server: "csci435db.database.windows.net", // update me
  options: {
    database: "schedule", //update me
    encrypt: true
  }
};

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } 
  else 
  {
    queryDatabase();
  }
});

function queryDatabase() {
  console.log("Reading rows from the Table...");

  // let sqlCommand = "";
  // sqlCommand = "Select * from student"

  console.log(sqlCommand);

  // Read all rows from table
  const request = new Request(
     sqlCommand,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
}