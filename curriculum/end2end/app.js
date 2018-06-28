const fs = require('fs');
// All your code should go here
fs.readdir('/home', (err, files)=> {
  const usersWithoutMe = files.filter(file => file !== 'dsoper')
    fs.writeFile(__dirname + '/users.txt', usersWithoutMe, (err)=> {
      if (err) console.log('err', err);
    });
});
