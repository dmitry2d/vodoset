
import { config } from 'dotenv';
import mysql from 'mysql';

config ({path: `./.env`});
config ({path: `../../.development.env`});

// console.log (process.env) У"""УУ;


const connection = mysql.createConnection({
    host: process.env.OLD_DB_HOST,
    user: process.env.OLD_DB_USER,
    password: process.env.OLD_DB_PASSWORD
  });
  
  connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");
  });

  