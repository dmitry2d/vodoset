/* 
copy_users.js
Access to V1.0 sql database dbo.Users
Show this data in console
Fill Users table with this data
*/

import { config } from 'dotenv';
import mysql from 'mysql';

config ({path: `./.env`});
config ({path: `../../.development.env`});

// console.log (process.env);


const connection = mysql.createConnection({
    host: process.env.OLD_DB_HOST,
    user: process.env.OLD_DB_USER,
    password: process.env.OLD_DB_PASSWORD
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");
  });