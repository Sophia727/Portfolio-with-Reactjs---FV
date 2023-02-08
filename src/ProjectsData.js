import defImg from './assets/images/code.png';
import bookmark from './assets/images/bookmark_sc.png';
import quote_g from './assets/images/quote_g.png'
import tasks from './assets/images/tasks.png'
import weather from './assets/images/weather.png'
import blackboard from './assets/images/blackboard.png'
import blog_laravel from './assets/images/blog-laravel.png'
import MissHarmonie from './assets/images/MissHarmonie.png'
import calculator from './assets/images/calc.png'
import blink from './assets/images/blink.png'




export const projects = [
    {
        id:1,
        name:"Blackboard",
        href:"https://github.com/Sophia727/Blackboard",
        value: "Laravel",
        description: "Blackboard is fully functionning platform for universities management. Created with Laravel and supported with a Database",
        image: blackboard
    },
    {
        id: 8,
        name:"Calculator",
        href:"https://sophia727.github.io/Calculator/",
        value: "Javascript",
        description: "Colored Calculator",
        image: calculator

    },
    {
        id: 2,
        name:"Inspiring Quotes",
        href:"https://sophia727.github.io/js-quote-generator/text.html",
        value: "Javascript",
        description: "Motivational quotes with a soothing animated background. Fetched with APIs",
        image: quote_g

    },
    {
        id: 7,
        name:"Miss Harmonie",
        href:"sophia727.github.io/miss-harmonie/",
        value: "ReactJS",
        description: "Fully Functionning Websit for a beaity Salon in Marrakesh. ReactJS and Tailwind built.",
        image: MissHarmonie

    },

    {
        id: 3,
        name:"Blog",
        href:"https://github.com/Sophia727/blog_laravel",
        value: "Laravel",
        description: "Blog management application with authentifications",
        image: blog_laravel
    },
    {
        id:4,
        name:"Bookmark",
        href:"https://sophia727.github.io/bookmark/",
        value: "React",
        description: "Bookmark application with simple yet beautiful design",
        image: bookmark
    },
    {
        id: 5,
        name:"Weather App",
        href:"https://yassine-mg.github.io/weather-app2/",
        value: "ReactJS",
        description: "Bold themed Weather App built with APIs",
        image: weather

    },
    {
        id: 6,
        name:"Daily Tasks",
        href:"https://sophia727.github.io/daily_tasks_js/",
        value: "Javascript",
        description: "Grey themed daily tasks list",
        image: tasks

    },
    {
        id: 9,
        name:"Background Generator",
        href:"https://sophia727.github.io/background_generator/",
        value: "Javascript",
        description: "Background Generator with Javascript",
        image: blink

    },

    
]

export const btnType = [
    { id: 1, name: "All", value: "All" },
    { id: 3, name: "Javascript", value: "Javascript" },
    { id: 4, name: "ReactJS", value: "ReactJS" },
    { id: 5, name: "Laravel", value: "Laravel" },
  ];