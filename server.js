let express = require('express');
let parser = require('body-parser');
let app = express();

app.use(parser.json());

app.post('/api/get/profile', (req, res) => {
  const data = {

    info: {
      myPage: true,
      name: 'Егор Утробин', // полное имя студента
      standing: 'Cтудент',  // категория пользователя
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
          name: 'Базовое администрирование Linux (Набор Весна 2015)',
          semesters: [
            {
              name: 'Базовое администрирование Linux (Набор Весна 2015)',
              rating: 'ОТЛ'
            }
          ],
        }, {
          name: 'Разработка приложений на iOS (Набор Осень 2015)',
          semesters: [
            {
              name: 'Разработка приложений на iOS (Набор Осень 2015)',
              rating: 'ОТЛ'
            }
          ],
        }, {
          name: 'Системный архитектор (Набор Осень 2013)',
          semesters: [
            [
              {
                name: 'Web-технологии',
                rating: 'ОТЛ'
              }, {
                name: 'Алгоритмы и структуры данных',
                rating: 'ОТЛ'
              }, {
                name: 'Углубленное программирование на C/C++',
                rating: 'ОТЛ'
              }
            ], [
              {
                name: 'Проектирование интерфейсов',
                rating: 'ОТЛ'
              }, {
                name: 'Базы данных',
                rating: 'ОТЛ'
              }, {
                name: 'Углубленное программирование на Java',
                rating: 'ОТЛ'
              }, {
                name: 'Фронтенд разработка',
                rating: 'ОТЛ'
              }, {
                name: 'Тренинг "Навыки деловых коммуникаций"',
                rating: 'ЗАЧ'
              }
            ], [
              {
                name: 'Мобильная разработка',
                rating: 'ОТЛ'
                }, {
                name: 'Проектирование высоконагруженных систем',
                rating: 'ОТЛ'
              }, {
                name: 'Безопасность интернет-приложений',
                rating: 'ОТЛ'
              }, {
                name: 'Обеспечение качества в разработке ПО',
                rating: 'ОТЛ'
              }
            ], [
              {
                name: 'Управление продуктом и проектом',
                rating: 'ОТЛ'
              }, {
                name: 'Разработка выпускного проекта',
                rating: 'ЗАЧ'
              }, {
                name: 'Методологии разработки',
                rating: 'ЗАЧ'
              }, {
                name: 'Мастерство презентации',
                rating: 'ЗАЧ'
              }, {
                name: 'Лидерство и психология управления',
                rating: 'ЗАЧ'
              }
            ],
          ]
        }
      ],
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

app.post('/api/auth', (req, res) => {
  const data = {
    id: 3,
    img: 'static/img/avatar.jpg',
  };

  res.send(data);
});

app.post('/api/delete/skill', (req, res) => {
  console.log(req.body, req.params, req.query);
  res.send({ ok: 'ok' });
});

app.post('/api/add/skill', (req, res) => {
  console.log(req.body, req.params, req.query);
  res.send({ ok: 'ok' });
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
      }, {
        value: 'Новый навык',
        count: 0,
        id: 3,
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


//Статусы ДЗ
//1 - Выдано
//2 - Ожидает проверки
//3 - В доработке
//4 - Сдано
//5 - Просроченно

app.post('/api/get/homework', (req, res) => {
  console.log(req.body, req.params, req.query);

  const data = {
    discipline: [
      'АИСД',
      'WEB - технологии',
      'C/C++'
    ],
    homework: [
      {
        title: 'Домашние задание №1',
        discipline: 'Алгоритмы и структуры данных',
        text: `
          <p>Доброго дня!</p>
          <p>
            Основной источник информации по bootstrap
            <a>http://getbootstrap.com/css/</a>
            <a>http://getbootstrap.com/components/</a>
          </p>
          <p>
            Скачать стартовый шаблон вместе со всеми js, css, шрифтами и проч.
            wget -p http://getbootstrap.com/examples/starter-template/
          </p>
          <p>
            Инструмент для статической проверки верстки
            <a>https://github.com/twbs/bootlint</a>
            инструмент bootlint полезен для проверки вашей верстки на соответствие идеологии и подходам заложенным в bootstap
            помогает выявить существующие и потенциальные ошибки
            <a>https://github.com/twbs/bootlint/wiki</a>
            может использоваться как инструмент командной строки или как js bookmarklet
          </p>
          <p>
            Всем удачи!
          </p>
        `,
        dedline: '8 января 2016 г.',
        author: {
          img: 'static/img/step.jpg',
          name: 'Cтепан Мацкевич'
        },
        status: 5,
        points: {
          received: 0,
          maximum: 15
        },
        views: 345,
        like: 21,
        comments: 7,
      }, {
        title: 'Материалы для разработки проекта',
        discipline: 'Web-технологии (первый семестр)',
        text: `
          <p>
          Методичка по настройке nginx: <a>https://docs.google.com/document/d/1BuH_QTZtfgXVor_z9ANRb15Oxd-YrBkeMCNzldhCzGo/edit</a>
          </p>
          <p>
            Django first steps: <a>http://djbook.ru/rel1.9/intro/tutorial01.html</a> <a>http://djbook.ru/rel1.9/intro/tutorial02.html</a> <a>http://djbook.ru/rel1.9/intro/tutorial03.html http://djbook.ru/rel1.9/intro/tutorial04.html</a>
          (дальнейший шаги не нужны)
          </p>
          <p>
            Если у вас возникают трудности с использованием Python, потратьте часа 4-6, пройдите туториалы по самому языку: <a>https://www.google.ru/search?q=python+quick+start&oq=python+quick+start&aqs=chrome..69i57j0l5.2980j0j7&client=ubuntu&sourceid=chrome&ie=UTF-8</a>
          </p>
        `,
        dedline: '14 января 2016 г.',
        author: {
          img: 'static/img/smal.jpg',
          name: 'Дмитрий Смаль'
        },
        status: 1,
        points: {
          received: 15,
          maximum: 15
        },
        views: 345,
        like: 21,
        comments: 7,
      }, {
        title: 'Задание на второй модуль',
        discipline: 'Алгоритмы и структуры данных',
        text: `
          <p>Здесь само задание: <a>https://drive.google.com/open?id=0B6oYnrxwl0UcazJsNnBTeVlIOXc.</a></p>
          <p>
            Контест: <a>http://tp-test1.tech-mail.ru:5000/contest/74/status/</a>
            Ссылка на старый интерфейс: <a>http://tp-test1.tech-mail.ru/cgi-bin/new-client?contest_id=74</a>.
          </p>
          <p>
            Ведомость там же: <a>https://drive.google.com/open?id=1QfVZcANCcXQCxBo1WNVX3wDg_MLEu40iewlSgomy1Os</a>
          </p>
          <p>
            В задании есть соревнование - 7 задача. За 1, 2 и 3 место в каждой группе предусмотрены призовые баллы! Подробности в задании.
          </p>
          <p>Успехов!</p>
        `,
        dedline: '25 января 2016 г.',
        author: {
          img: 'static/img/step.jpg',
          name: 'Cтепан Мацкевич'
        },
        status: 2,
        points: {
          received: 0,
          maximum: 15
        },
        views: 345,
        like: 21,
        comments: 7,
      }, {
        title: 'Материалы для разработки проекта',
        discipline: 'Web-технологии (первый семестр)',
        text: `
          <p>
          Методичка по настройке nginx: <a>https://docs.google.com/document/d/1BuH_QTZtfgXVor_z9ANRb15Oxd-YrBkeMCNzldhCzGo/edit</a>
          </p>
          <p>
            Django first steps: <a>http://djbook.ru/rel1.9/intro/tutorial01.html</a> <a>http://djbook.ru/rel1.9/intro/tutorial02.html</a> <a>http://djbook.ru/rel1.9/intro/tutorial03.html http://djbook.ru/rel1.9/intro/tutorial04.html</a>
          (дальнейший шаги не нужны)
          </p>
          <p>
            Если у вас возникают трудности с использованием Python, потратьте часа 4-6, пройдите туториалы по самому языку: <a>https://www.google.ru/search?q=python+quick+start&oq=python+quick+start&aqs=chrome..69i57j0l5.2980j0j7&client=ubuntu&sourceid=chrome&ie=UTF-8</a>
          </p>
        `,
        dedline: '14 января 2016 г.',
        author: {
          img: 'static/img/smal.jpg',
          name: 'Дмитрий Смаль'
        },
        status: 4,
        points: {
          received: 15,
          maximum: 15
        },
        views: 345,
        like: 21,
        comments: 7,
      }
    ]
  };

  res.send(data);
});

app.all(/^\/(?!file$).*/, express.static('src'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});