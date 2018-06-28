const fs = require('fs');
const express = require('express');
const app = express();
// All your code should go here
fs.readdir('/home', (err, files)=> {
  const usersWithoutMe = files.filter(file => file !== 'dsoper')
    fs.writeFile(__dirname + '/users.txt', usersWithoutMe, (err)=> {
      if (err) console.log('err', err);
    });
});

app.listen(6875, () => console.log('listening on 6875'));

  app.get('/hello', (req, res) => {
    res.send('<h1 style="color: red;"> HI </h1><button> BUTTON </button> <input/>');
  });
