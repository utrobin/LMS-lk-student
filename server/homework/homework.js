//Статусы ДЗ
//1 - Выдано
//2 - Ожидает проверки
//3 - В доработке
//4 - Сдано
//5 - Просроченно

const homeworkGet = (req, res) => {
  console.log(req.body);

  const data = {
    discipline: [
      'АИСД',
      'WEB - технологии',
      'C/C++',
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
};

module.exports.homeworkGet = homeworkGet;
