import React from 'react';
import runbuddy from '../assets/images/runbuddy.png'
import moviesearchengine from '../assets/images/moviesearchengine.png'
import workdayscheduler from '../assets/images/workdayscheduler.png'
import weatherdashboard from '../assets/images/weatherdashboard.png'
import codequiz from '../assets/images/codequiz.png'
import portfolio from '../assets/images/portfolio.png'

function Portfolio() {
    const contents = [
        {
            name: 'Run Buddy',
            link: 'https://lernantino.github.io/run-buddy/',
            Glink: 'https://github.com/vivianarodriguez1712/run-buddy',
            image: runbuddy
        },
        {
            name: 'Movie Search Engine',
            link: ' https://rrvallar.github.io/Movie-Search-Engine/',
            Glink: 'https://github.com/vivianarodriguez1712/Movie-Search-Engine',
            image: moviesearchengine
        },
        {
            name: 'Work Day Scheduler',
            link: ' https://vivianarodriguez1712.github.io/work-day-scheduler/',
            Glink: 'https://github.com/vivianarodriguez1712/work-day-scheduler',
            image: workdayscheduler
        },
        {
            name: 'Weather Dashboard',
            link: ' https://vivianarodriguez1712.github.io/weather-dashboard/',
            Glink: 'https://github.com/vivianarodriguez1712/weather-dashboard',
            image: weatherdashboard
        },
        {
            name: 'Code Quiz',
            link: ' https://vivianarodriguez1712.github.io/code-quiz/',
            Glink: 'https://github.com/vivianarodriguez1712/code-quiz',
            image: codequiz
        },
        {
            name: 'Portfolio',
            link: ' https://vivianarodriguez1712.github.io/Portfolio-/',
            Glink: 'https://github.com/vivianarodriguez1712/Portfolio-',
            image: portfolio
        },

    ]
    return (
        <section class="apps-developed">
            <h2 class="portfolio">Portfolio</h2>
            <ul>
                {contents.map((content) =>
                    <li key={content.name}>
                        <a href={content.link}>{content.name}</a>
                        <a href={content.Glink}> Repository</a>
                        <img src={content.image} alt={content.name} width="200" height="200"></img>
                    </li>)}
            </ul>
        </section>
    );
}

export default Portfolio;