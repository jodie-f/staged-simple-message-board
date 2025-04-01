// message board app
// stage 1: basic web server
import express from 'express';

const app = express();
app.use(express.static('client'));
// creates a server for files under the 'client' folder, when listening on port 8080, you can load up the individual files compared to running index.html in a browser
app.listen(8080);
