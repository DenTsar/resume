// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanovko',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'м.Полтава, вул. Д.Коряка 3',
}
var footer = {
  social: {
    email: {
      href: 'mailto:dmytro@mail.com',
      text: 'dmytro@mail.com',
    },

    phone: {
      href: 'tel:+380670000123',
      text: '+380670000123',
    },

    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'linkedin',
    },
  },
}

// ================================================================

router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume/Education:',
    },
    header,
    main: {
      educations: [
        {
          name: 'Середня школа №5',
          isEnd: true,
        },

        {
          name: 'Європейський університет',
          isEnd: true,
        },

        {
          name: 'Інститут єкономіки і права',
          isEnd: false,
        },

        {
          name: 'Полтавський національний технічний університет',
          isEnd: false,
        },
      ],
      sertificates: [
        {
          name: 'Сертифікат про закінчення курсу "Js-розробник"',
          id: 4548745845,
        },

        {
          name: 'Європейський університет. Бакалавр ...',
          id: 5285465,
        },

        {
          name: 'It Brains. FullStack',
          id: 68461226,
        },
      ],
    },

    footer,
  })
})

router.get('/skils', function (req, res) {
  res.render('skils', {
    page: {
      title: 'Resume/Skils:',
    },
    header,

    main: {
      skils: [
        {
          name: 'HTML',
          point: 9,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VsCode',
          point: 7,
        },
        {
          name: 'Git',
          point: 9,
        },
        {
          name: 'Terminal',
          point: 9,
        },
        {
          name: 'NPM',
          point: 10,
          isTop: true,
        },
        {
          name: 'ReactJs',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Бокс',
          isMain: false,
        },

        {
          name: 'Електроніка',
          isMain: false,
        },

        {
          name: 'ІТ - технології',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume/Resume:',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
        work on a new project I learn the domain and try to understand the idea of the project. Good team player,
        every colleague is a friend to me.`,
      },
      experience: {
        title: 'OtherExperience:',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics 
              ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability
              for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume/Education:',
    },
    header,
    main: {
      educations: [
        {
          name: 'Середня школа №5',
          isEnd: true,
        },

        {
          name: 'Європейський університет',
          isEnd: true,
        },

        {
          name: 'Інститут єкономіки і права',
          isEnd: false,
        },

        {
          name: 'Полтавський національний технічний університет',
          isEnd: false,
        },
      ],
      sertificates: [
        {
          name: 'Сертифікат про закінчення курсу "Js-розробник"',
          id: 4548745845,
        },

        {
          name: 'Європейський університет. Бакалавр ...',
          id: 5285465,
        },

        {
          name: 'It Brains. FullStack',
          id: 68461226,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume/Work:',
    },
    header,

    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            // url: null,
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
          projectAmount: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://It-brains.com.ua/',
              about: 'Whis is my resume project',
              stackAmount: 5,
              stack: [
                {
                  name: 'react.js',
                },
                {
                  name: 'HTML /CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awardsAmount: 6,
              awards: [
                {
                  name: 'Background verification-is a future...',
                },
                {
                  name: 'Preparing SEO optimized pages...',
                },
              ],
            },
          ],
        },

        // {
        //   position: 'Junior Fullstack Developer',
        //   company: {
        //     name: 'It-osvita',
        //     url: 'https://it-osvita.com.ua/',
        //   },
        //   duration: {
        //     from: '10.10.2020',
        //     to: null,
        //   },
        //   projectAmount: 3,
        //   Projects: [{}],
        // },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
