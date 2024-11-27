const express = require('express');
const path = require('path')

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

 
  
  let person = {
    name: "平井湊",
    nickname: "湊",
    zodiac:"おひつじ座",
    birthday: "3.23",
  };


  console.log("ニックネーム: " + person.nickname);
  console.log("星座: " + person.zodiac);
  console.log("誕生日: " + person.birthday);


  for (let key in person) {
  console.log(key + ": " + person[key]);
  }
app.get('/api', (req, res) => {
  res.json({"msg": "Hello world"});
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})