const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));


app.post('/postExample', (req, res, next) => {
  res.json({ msg: 'Works!', name: req.body.name });
});

const server = app.listen(3000, () => {
  console.log('Listening on port %s', server.address().port);
});
