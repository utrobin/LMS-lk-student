const auth = (req, res) => {
  const data = {
    id: 3,
    img: '/static/img/avatar.jpg',
    login: 'e.utrobin'
  };

  res.send(data);
};

module.exports.auth = auth;
