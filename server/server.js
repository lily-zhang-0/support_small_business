const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const session = require('./session');
const uuidv4 = require('uuid/v4');
const voucherCodes = require('voucher-code-generator');

const lists = require('./lists');

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./build'));
const PORT = process.env.PORT || 5000;

app.get('/posts', (req, res) => {
  if (lists.posts) {
    res.json({ posts: lists.posts });
  } else {
    res.status(401).json({ code: 'not posts found' });
  }
});

app.post('/posts', express.json(), (req, res) => {
  const uid = req.cookies.uid;
  const author = session.getUsername(uid);
  if (!author) {
    res.status(401).json({ code: 'login-required' });
    return;
  }
  const id = uuidv4();
  const imagePath = req.body.imagePath;
  const instruction= req.body.instruction;
  const couponCode = voucherCodes.generate({ length: 8, count: 1 });
  lists.addPost({ id, author, couponCode, imagePath, instruction});
  const post = lists.getPostById(id);
  res.status(200).json(post);
});

app.get('/session', (req, res) => {
  const uid = req.cookies.uid;
  const username = session.getUsername(uid);
  if (!username) {
    res.status(401).json({ code: 'login-required' });
    return;
  }
  session.userLogin(uid);
  res.sendStatus(200);
});

app.post('/session', express.json(), (req, res) => {
  const username = req.body.username;
  if (!username) {
    res.status(400).json({ code: 'username-required' });
  } else if (!session.isValidLogin(username)) {
    res.status(403).json({ code: 'username-denied' });
  } else {
    const uid = session.addUser(username);
    res.cookie('uid', uid);
    res.sendStatus(200);
  }
});

app.post('/logout', (req, res) => {
  const uid = req.cookies.uid;
  session.userLogout(uid);
  res.cookie('uid', '');
  res.sendStatus(200);
})

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}/`));