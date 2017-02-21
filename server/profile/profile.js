const profileGet = (req, res) => {
  console.log(req.body);

  const data = {
    info: {
      myPage: req.body.value === "" ? true : false,
      name: req.body.value === "" ? 'Егор Утробин' : 'Дмитрий Смаль', // полное имя студента
      standing: req.body.value === "" ? 'Студент' : 'Преподаватель',  // категория пользователя
      group: req.body.value === "" ? [
          {
            value: 'АПО-31',
            link: '/#'
          }, {
            value: 'BALinux-11',
            link: '/#'
          }
        ] : [
          {
            value: 'Web-технологии (1 семестр)',
            link: '/#'
          }
        ],
      status: 'online',
      power: 8.32,
      rating: 7.24,
      social: [
        {
          value: 'facebook',
          link: '/#',
          img: '/static/img/facebook.svg'
        }, {
          value: 'github',
          link: '/#',
          img: '/static/img/github.svg'
        }, {
          value: 'vk',
          link: '/#',
          img: '/static/img/vk.svg'
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
            i: 18
          },
          semester: {
            all: 48,
            i: 3
          }
        },
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
                rating: '5'
              }, {
              name: 'Алгоритмы и структуры данных',
              rating: '4'
            }, {
              name: 'Углубленное программирование на C/C++',
              rating: '3'
            }
            ], [
              {
                name: 'Проектирование интерфейсов',
                rating: 'ОТЛ'
              }, {
                name: 'Базы данных',
                rating: 'ХОР'
              }, {
                name: 'Углубленное программирование на Java',
                rating: 'ХОР'
              }, {
                name: 'Фронтенд разработка',
                rating: 'УДОВЛ'
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
                rating: 'УДОВЛ'
              }, {
                name: 'Безопасность интернет-приложений',
                rating: 'УДОВЛ'
              }, {
                name: 'Обеспечение качества в разработке ПО',
                rating: 'НЕУД'
              }
            ], [
              {
                name: 'Управление продуктом и проектом',
                rating: 'ОТЛ'
              }, {
                name: 'Разработка выпускного проекта',
                rating: 'НЕУД'
              }, {
                name: 'Методологии разработки',
                rating: 'НЕУД'
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
    avatar: req.body.value === "" ? '/static/img/avatar.jpg' : '/static/img/smal.jpg',
    achievements: [
      '/static/img/ach5.png',
      '/static/img/ach1.png',
      '/static/img/ach2.png',
      '/static/img/ach3.png',
      '/static/img/ach4.png',
      '/static/img/ach5.png',
    ]
  };

  res.send(data);
};

module.exports.profileGet = profileGet;
