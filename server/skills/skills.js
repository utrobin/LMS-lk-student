const skillsGet = (req, res) => {
  const data = {
    data: [
      {
        value: 'JavaScript',
        count: 5,
        id: 0,
        author: 'login',
        vote: true,
        peoples: [
          {
            img: '/static/img/1.jpg',
            login: 'login',
          }, {
            img: '/static/img/2.jpg',
            login: 'login',
          }, {
            img: '/static/img/3.jpg',
            login: 'login',
          }, {
            img: '/static/img/1.jpg',
            login: 'login',
          }, {
            img: '/static/img/2.jpg',
            login: 'login',
          }
        ]
      }, {
        value: 'Linux',
        count: 3,
        id: 1,
        author: 'e.utrobin',
        vote: false,
        peoples: [
          {
            img: '/static/img/1.jpg',
            login: 'e.utrobin',
          }, {
            img: '/static/img/2.jpg',
            login: 'login',
          }, {
            img: '/static/img/3.jpg',
            login: 'login',
          }
        ]
      }, {
        value: 'C/C++',
        count: 4,
        id: 2,
        vote: true,
        author: 'login',
        peoples: [
          {
            img: '/static/img/1.jpg',
            login: 'login',
          }, {
            img: '/static/img/2.jpg',
            login: 'login',
          }, {
            img: '/static/img/3.jpg',
            login: 'login',
          }, {
            img: '/static/img/1.jpg',
            login: 'login',
          }
        ]
      }, {
        value: 'Новый навык',
        count: 0,
        id: 3,
        author: 'login',
        vote: true,
        peoples: []
      }
    ],
    dictionarySkills: [
      'JavaScript',
      'C/C++',
      'Python',
      'SQL',
      'React'
    ]
  };

  res.send(data);
};

module.exports.skillsGet = skillsGet;
