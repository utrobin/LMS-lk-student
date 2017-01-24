let express = require('express');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('src'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});