const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
const port = process.env.PORT || '3001';

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});