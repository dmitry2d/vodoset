
import { config } from 'dotenv';

config ({path: `./.env`});
config ({path: `../../.development.env`});

console.log (process.env);