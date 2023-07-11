/* 
Import old db from txt
*/

import fs  from 'fs';
import readline from 'readline';
import { StringDecoder } from 'string_decoder';
import { config } from 'dotenv';
import { initDatabase } from '../index.js';
import { models } from '../models/index.js';

config ({path: `../../.development.env`});
const decoder = new StringDecoder('utf8');


const path = '';

(async ()=> {
  await initDatabase (process.env);
  processLineByLine(path);
})();


async function processLineByLine(path) {

  const fileStream = fs.createReadStream(path, {encoding:'utf8'});
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.


  let i = 0;
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    i ++;
    let row = line.split('\t');
    models.testModel.create({
      call_id: Number(row[1]) || 0
    })

    // console.log(decoder.write(line));
    if (i == 12) break;
  }
}


