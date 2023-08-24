const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

// ルーティングの設定
app.get("/", (req, res) => {
  const data = {
    message: "hello world",
    data: "2022-03-19",
  };
  res.json(data);
  //   const name = req.query.name;
  //   res.sendFile(`${__dirname}/public/index.html`);
  //   console.log(name);
  //   console.log("/ へアクセスがありました");
});

app.post("/", (req, res) => {
  const name = req.body.name;
  console.log(name);
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get("/image/:file", (req, res) => {
  const file = req.params.file;

  res.sendFile(`${__dirname}/public/image/${file}`);
  console.log(`/image/${file} へアクセスがありました`);
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
