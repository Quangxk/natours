const fs = require('fs');
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
};
exports.getUserById = (req, res) => {
  const id = req.params._id;
  const user = users.find((result) => result.id === id);
  if (!user) {
    res.status(404).json({
      status: 'failed',
      message: 'invalid id',
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }
};
exports.updateUserById = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((result) => result.id === id);
  if (!user) {
    res.status(404).json({
      status: 'failed',
      message: 'invalid id',
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  }
};
exports.addNewUser = (req, res) => {
  res.status(200).json({
    message: 'WIP',
  });
};
exports.deleteUserById = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((result) => result.id === id);
  if (!user) {
    res.status(404).json({
      status: 'failed',
      message: 'invalid id',
    });
  } else {
    res.status(204).json({
      status: 'success',
      data: {
        user: null,
      },
    });
  }
};
