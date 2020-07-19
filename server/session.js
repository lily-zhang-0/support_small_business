const { v4: uuidv4 } = require('uuid');

const session = {
  users: {},
  loggedIn: {},
  getUsername: (uid) => session.loggedIn[uid] && session.loggedIn[uid].username,
  isValidLogin: (username) => !username.match(/dog|\s/g),
  addUser: (username) => {
    const uid = uuidv4();
    session.loggedIn[uid] = { username };
    return uid;
  },
  userLogin: (uid) => session.loggedIn[uid] = true,
  userLogout: (uid) => delete session.loggedIn[uid]
};

module.exports = session;