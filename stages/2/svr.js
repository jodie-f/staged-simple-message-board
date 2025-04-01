// message board app
// stage 2: add route for getting messages

// IN ORDER TO RUN THIS FOLDER: npm run stage2
import express from 'express';

const app = express();
app.use(express.static('client'));

// dynamic content
const messages = [
  'these are three default messages',
  'delivered from the server',
  'using a custom route',
];

// turns the messages array into a json file
function getMessages(req, res) {
  res.json(messages);
}

// creating a route in express
app.get('/messages', getMessages);

app.listen(8080);
