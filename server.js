let express = require('express');
let parser = require('body-parser');
let app = express();

app.post('/api/get/profile', (req, res) => {
  const data = {

    info: {
      myPage: true,
      name: 'Егор Утробин',
      standing: 'Cтудент',
      group: [
        {
          value: 'АПО-31',
          link: '/#'
        }, {
          value: 'BALinux-11',
          link: '/#'
        }
      ],
      status: 'online',
      power: 8.32,
      rating: 7.24,
      social: [
        {
          value: 'facebook',
          href: '/#',
          img: 'static/img/facebook.svg'
        }, {
          value: 'github',
          href: '/#',
          img: 'static/img/github.svg'
        }, {
          value: 'vk',
          href: '/#',
          img: 'static/img/vk.svg'
        }
      ],
      born: '21 февраля 1997г.',
      department: {
        value: 'РЛ - 2',
        link: '/#'
      },
      email: 'egor.utrobin@gmail.com',
      telephone: '+7 925 197 52 86'
    },
    education: {
      performance: [
        {
          title: 'Успеваемость:',
          set: {
            all: 52,
            i: 4
          },
          semester: {
            all: 48,
            i: 6
          }
        }
      ],
      completed: [
        {
          value: 'Linux',
          title: 'Базовое администрирование Linux (Набор Весна 2015)',
          rating: 'ОТЛ'
        }, {
          value: 'IOS',
          title: 'Разработка приложений на iOS (Набор Осень 2015)',
          rating: 'ОТЛ'
        },
      ],
      SA: {
        value: true,
        title: 'Системный архитектор (Набор Осень 2013)',
        semesters: [
          [
            {
              title: 'Web-технологии',
              rating: 'ОТЛ'
            }, {
              title: 'Алгоритмы и структуры данных',
              rating: 'ОТЛ'
            }, {
              title: 'Углубленное программирование на C/C++',
              rating: 'ОТЛ'
            }
          ],
          [
            {
              title: 'Проектирование интерфейсов',
              rating: 'ОТЛ'
            }, {
            title: 'Базы данных',
            rating: 'ОТЛ'
          }, {
            title: 'Углубленное программирование на Java',
            rating: 'ОТЛ'
          }, {
            title: 'Фронтенд разработка',
            rating: 'ОТЛ'
          }, {
            title: 'Тренинг "Навыки деловых коммуникаций"',
            rating: 'ЗАЧ'
          }
          ],
          [
            {
              title: 'Мобильная разработка',
              rating: 'ОТЛ'
            }, {
            title: 'Проектирование высоконагруженных систем',
            rating: 'ОТЛ'
          }, {
            title: 'Безопасность интернет-приложений',
            rating: 'ОТЛ'
          }, {
            title: 'Обеспечение качества в разработке ПО',
            rating: 'ОТЛ'
          }
          ],
          [
            {
              title: 'Управление продуктом и проектом',
              rating: 'ОТЛ'
            }, {
            title: 'Разработка выпускного проекта',
            rating: 'ЗАЧ'
          }, {
            title: 'Методологии разработки',
            rating: 'ЗАЧ'
          }, {
            title: 'Мастерство презентации',
            rating: 'ЗАЧ'
          }, {
            title: 'Лидерство и психология управления',
            rating: 'ЗАЧ'
          }
          ],
        ]
      },
    },
    avatar: 'static/img/avatar.jpg',
    achievements: [
      'static/img/ach5.png',
      'static/img/ach1.png',
      'static/img/ach2.png',
      'static/img/ach3.png',
      'static/img/ach4.png',
      'static/img/ach5.png',
    ]
  };

  res.send(data);
});

app.post('/api/get/friends', (req, res) => {
  const data = [
    {
      img: 'static/img/1.jpg',
      id: '0',
      name: 'Денис'
    }, {
      img: 'static/img/2.jpg',
      id: '1',
      name: 'Илья'
    }, {
      img: 'static/img/3.jpg',
      id: '2',
      name: 'Сергей'
    }, {
      img: 'static/img/1.jpg',
      id: '0',
      name: 'Денис'
    }, {
      img: 'static/img/2.jpg',
      id: '1',
      name: 'Илья'
    }, {
      img: 'static/img/3.jpg',
      id: '2',
      name: 'Сергей'
    }
  ];

  res.send(data);
});

app.post('/api/get/projects', (req, res) => {
  const data = [
    {
      img: 'static/img/project.png',
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
          value: 'React',
          link: '#'
        }, {
          value: 'Materia design',
          link: '#'
        }, {
          value: 'Spring',
          link: '#'
        }, {
          value: '3D',
          link: '#'
        }, {
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
          img: 'static/img/1.jpg',
          id: '0',
          name: 'Денис',
        }, {
          img: 'static/img/2.jpg',
          id: '1',
          name: 'Илья',
          mentor: true
        }, {
          img: 'static/img/3.jpg',
          id: '2',
          name: 'Сергей'
        }, {
          img: 'static/img/1.jpg',
          id: '0',
          name: 'Денис'
        }
      ]
    }, {
      img: 'static/img/project.png',
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
          value: 'React',
          link: '#'
        }, {
          value: 'Materia design',
          link: '#'
        }, {
          value: 'Spring',
          link: '#'
        }, {
          value: '3D',
          link: '#'
        }, {
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
          img: 'static/img/1.jpg',
          id: '0',
          name: 'Денис',
        }, {
          img: 'static/img/2.jpg',
          id: '1',
          name: 'Илья',
          mentor: true
        }, {
          img: 'static/img/3.jpg',
          id: '2',
          name: 'Сергей'
        }, {
          img: 'static/img/1.jpg',
          id: '0',
          name: 'Денис'
        }
      ]
    }
  ];

  res.send(data);
});

app.post('/api/get/skills', (req, res) => {
  const data = {
    data: [
      {
        value: 'JavaScript',
        count: 5,
        id: 0,
        peoples: [
          {
            img: 'static/img/1.jpg',
            id: '0',
          }, {
            img: 'static/img/2.jpg',
            id: '1',
          }, {
            img: 'static/img/3.jpg',
            id: '2',
          }, {
            img: 'static/img/1.jpg',
            id: '3',
          }, {
            img: 'static/img/2.jpg',
            id: '4',
          }
        ]
      }, {
        value: 'Linux',
        count: 3,
        id: 1,
        peoples: [
          {
            img: 'static/img/1.jpg',
            id: '0',
          }, {
            img: 'static/img/2.jpg',
            id: '1',
          }, {
            img: 'static/img/3.jpg',
            id: '2',
          }
        ]
      }, {
        value: 'C/C++',
        count: 4,
        id: 2,
        peoples: [
          {
            img: 'static/img/1.jpg',
            id: '0',
          }, {
            img: 'static/img/2.jpg',
            id: '1',
          }, {
            img: 'static/img/3.jpg',
            id: '2',
          }, {
            img: 'static/img/1.jpg',
            id: '3',
          }
        ]
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
});

app.post('/api/get/dictionaryskills', (req, res) => {
  const data = [
    'JavaScript',
    'C/C++',
    'Python',
    'SQL',
    'React'
  ];

  res.send(data);
});

app.all(/^\/(?!file$).*/, express.static('src'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});