const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// All your code should go here
app.use(express.static('public'));
app.use(bodyParser.json({ limit: '500mb' }));

app.get('/images', (req, res) => {
  const filePath = '/home/dsoper/Documents/algorithms/curric/curriculum/curriculum/end2end/public/images';
  fs.readdir(filePath, (err, files)=> {
    return res.send(files);
  });
});

app.post('/upload', (req, res) => {
  const photoData = req.body.photo.replace('data:image/png;base64,', '');
  const photoPath ='/home/dsoper/Documents/algorithms/curric/curriculum/curriculum/end2end/public/images' + '/' + Date.now() + '.png';
  fs.writeFile(photoPath, photoData, 'base64', ()=> {
    console.log('file written');
  })
});

app.listen(6875, () => console.log('listening on 6875'));

