import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { genreRouter } from './routes/genre.route.js';
// import apicache from 'apicache';
// import expressHttpProxy from 'express-http-proxy';
// import * as cors_proxy from 'cors-anywhere';
import request from 'request-promise';
import * as fs from 'fs';
const CORS_PROXY_PORT = 5000;
const app = express();
dotenv.config();
// cors_proxy.createServer({})
//   .listen(CORS_PROXY_PORT, 
//     () => console.log(`Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`));
mongoose.connect(process.env.MONGO_URL).then(() => console.log("Connect Mongoose success"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
  res.json({'movie-be': "Hello world!"});
})
app.use('/genre',genreRouter)
// app.use(expressHttpProxy(`localhost:${CORS_PROXY_PORT}`));




// const APP_PORT = 8080;
// app.listen(APP_PORT, () => {
//   console.log(`External CORS cache server started at port ${APP_PORT}`);
// });

app.listen(process.env.PORT || 8888, () => {
  console.log("Server is running on port 8888");
});




