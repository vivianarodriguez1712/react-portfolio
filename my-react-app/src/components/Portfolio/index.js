import React from 'react';
import runbuddy from '../assets/images/runbuddy.png'

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
            image: runbuddy
        },

    ]
    return (
        <>
            <h2 id='portfolio'>Portfolio</h2>
            <ul>
                {contents.map((content) =>
                    <li key={content.name}>
                        <a href={content.link}>{content.name}</a>
                        <a href={content.Glink}> Repository</a>
                        <img src={content.image} alt={content.name}></img>
                    </li>)}
            </ul>
        </>
    );
}

export default Portfolio;