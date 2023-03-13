
import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config({path: `.${process.env.NODE_ENV}.env`});
const app = express();
app.listen(process.env.PORT, () => {

    console.log (`Server started at ${process.env.PORT}`);

});

app.get ('/', (req, res) => {
    res.json({hello: true});
})
