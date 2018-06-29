const fs = require('fs');
const express = require('express');
const app = express();
const multer = require('multer');
// All your code should go here
app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '/home/dsoper/Documents/algorithms//');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get('/files', (req, res) => {
  fs.readdir('/home/dsoper/Documents/algorithms/', (err, files)=> {
    return res.json(files);
  });
});

app.post('/upload', upload.any(), (req, res) => {
  res.redirect('/');
});

app.listen(6875, () => console.log('listening on 6875'));

