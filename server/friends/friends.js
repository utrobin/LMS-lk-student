const getFriends = (req, res) => {
  const data = [
    {
      img: '/static/img/1.jpg',
      id: '0',
      name: 'Денис',
      login: 'login',
    }, {
      img: '/static/img/2.jpg',
      id: '1',
      login: 'login',
      name: 'Илья'
    }, {
      img: '/static/img/3.jpg',
      id: '2',
      login: 'login',
      name: 'Сергей'
    }, {
      img: '/static/img/1.jpg',
      id: '0',
      login: 'login',
      name: 'Денис'
    }, {
      img: '/static/img/2.jpg',
      id: '1',
      login: 'login',
      name: 'Илья'
    }, {
      img: '/static/img/3.jpg',
      id: '2',
      login: 'login',
      name: 'Сергей'
    }
  ];

  res.send(data);
};

module.exports.getFriends = getFriends;
