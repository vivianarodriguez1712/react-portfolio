import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1>Resume</h1>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                <a href="https://github.com/jpd61/jpd-react-portfolio/raw/master/src/assets/Resume-Joseph-DeWoody.pdf" class="link"></a>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h3>Front End Experience</h3>
                <p>HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, and React.js</p>
            </div>
            <div id="front-back" class="mt-5">
                <h3>Back End Experience</h3>
                <p>
                Node.js, Express.js, SQL, Sequelize, NoSQL (MongoDB, Mongoose), API's, Handlebars
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;