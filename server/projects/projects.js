const projectsGet = (req, res) => {
  console.log(req.body);

  const data = [
    {
      img: '/static/img/project.png',
      github: null,
      title: 'Technoshooter (3D игра шутер)',
      descreption: {
        label: 'Проект на 2 семестр по предметам:',
        subjects: [
          'Фронтенд',
          'Углубленное программирование на Java',
          'Проектирование интерфейсов'
        ]
      },
      tags: [
        {
          id: 1,
          value: 'React',
          link: '#'
        }, {
          id: 2,
          value: 'Materia design',
          link: '#'
        }, {
          id: 3,
          value: 'Spring',
          link: '#'
        }, {
          id: 4,
          value: '3D',
          link: '#'
        }, {
          id: 5,
          value: 'Шутер',
          link: '#'
        }
      ],
      status: {
        value: 'проект закончен',
        site: 'javajava.ru',
        link: '#'
      },
      views: 345,
      like: 21,
      comments: 7,
      team: [
        {
          img: '/static/img/1.jpg',
          id: '0',
          login: 'login',
          name: 'Денис',
        }, {
          img: '/static/img/2.jpg',
          id: '1',
          login: 'login',
          name: 'Илья',
          mentor: true
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
        }
      ]
    }, {
      img: '/static/img/project.png',
      github: '#',
      title: 'Technoshooter (3D игра шутер)',
      descreption: {
        label: 'Проект на 2 семестр по предметам:',
        subjects: [
          'Фронтенд',
          'Углубленное программирование на Java',
          'Проектирование интерфейсов'
        ]
      },
      tags: [
        {
          id: 1,
          value: 'React',
          link: '#'
        }, {
          id: 2,
          value: 'Materia design',
          link: '#'
        }, {
          id: 3,
          value: 'Spring',
          link: '#'
        }, {
          id: 4,
          value: '3D',
          link: '#'
        }, {
          id: 5,
          value: 'Шутер',
          link: '#'
        }
      ],
      status: {
        value: 'проект закончен',
        site: null,
        link: '#'
      },
      views: 345,
      like: 21,
      comments: 7,
      team: [
        {
          img: '/static/img/1.jpg',
          name: 'Денис',
          login: 'login',
        }, {
          img: '/static/img/2.jpg',
          name: 'Илья',
          login: 'login',
          mentor: true
        }, {
          img: '/static/img/3.jpg',
          login: 'login',
          name: 'Сергей'
        }, {
          img: '/static/img/1.jpg',
          id: '0',
          login: 'login',
          name: 'Денис'
        }
      ]
    }
  ];

  res.send(data);
};

const projectsFilterGet = (req, res) => {
  const data = [
    {
      key: 'educational-project',
      name: 'Образовательный проект',
      default: '1',
      valueFilters: [
        {
          id: '1',
          name: 'Все'
        }, {
          id: '2',
          name: 'Технопарк'
        }, {
          id: '3',
          name: 'Техносфера'
        }, {
          id: '4',
          name: 'Технотрэк'
        }, {
          id: '5',
          name: 'Техноатом'
        }, {
          id: '6',
          name: 'Технополис'
        }
      ]
    }, {
      key: 'discipline',
      name: 'Курс или предмет',
      default: '1',
      valueFilters: [
        {
          id: "1",
          name: 'Все'
        }, {
          id: "2",
          name: 'Web-технологии'
        }, {
          id: "3",
          name: 'АИСД'
        }, {
          id: "4",
          name: 'Углуб. програм. на C/C++'
        }, {
          id: "5",
          name: 'Углуб. програм. на Java'
        }, {
          id: "6",
          name: 'Фронтенд разработка'
        }, {
          id: "7",
          name: 'Проектирование интерфейсов'
        }, {
          id: "8",
          name: 'Мобильная разработка'
        }, {
          id: "9",
          name: 'Выпускной проект'
        }, {
          id: "10",
          name: 'Linux'
        }, {
          id: "11",
          name: 'Разработка приложений на iOS'
        }
      ]
    }, {
      key: 'status',
      name: 'Статус',
      default: '1',
      valueFilters: [
        {
          id: '1',
          name: 'Не выбран'
        }, {
          id: '2',
          name: 'В разработке'
        }, {
          id: '3',
          name: 'Завершенн'
        }, {
          id: '4',
          name: 'В поиске команды'
        }
      ]
    }, {
      key: 'sort',
      name: 'Сортировать по:',
      default: '1',
      valueFilters: [
        {
          id: '1',
          name: 'Рейтингу'
        }, {
          id: '2',
          name: 'Новизне'
        }, {
          id: '3',
          name: 'Кол-ву комментариев'
        }
      ]
    }, {
      key: 'data',
      name: 'Дата создания',
      default: '1',
      valueFilters: [
        {
          id: '1',
          name: 'Все года'
        }, {
          id: '2',
          name: '2015'
        }, {
          id: '3',
          name: '2016'
        }, {
          id: '4',
          name: '2017'
        },
      ]
    }
  ];

  res.send(data);
};

module.exports.projectsFilterGet = projectsFilterGet;
module.exports.projectsGet = projectsGet;
