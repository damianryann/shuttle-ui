const express = require('express');

const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());
app.use('/static', express.static('public'));

app.listen(port, () => {
  console.log(`Shuttle is listening on port ${port}`);
});
