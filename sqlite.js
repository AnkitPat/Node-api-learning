import fetch from 'node-fetch';

import sqlite3 from 'sqlite3';


// open the database
let db = new sqlite3.Database('./db/maptiles10.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the chinook database.');
});

db.serialize(() => {
  db.each(`SELECT *
           FROM Tile`,async (err, row) => {
    if (err) {
      console.error(err.message);
    }
   try {
    const response = await fetch(`/Users/ankitpatidar/Documents/Projects/Personal/nodelearning/zipfile/jpg/${row.ZoomLevel}/${row.X}_${row.Y}.jpg`)
    console.log(await response.blob())
   } catch (e) {
       console.log(e, 'error')
   }
    console.log(row.Y + "\t" + row.X);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});