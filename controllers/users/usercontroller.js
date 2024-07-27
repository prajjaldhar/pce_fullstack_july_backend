const usersdata = require("../../utility/users.json");
const usercontroller = (req, res) => {
  res.send(usersdata);
};
module.exports = usercontroller;
