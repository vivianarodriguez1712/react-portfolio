import React from 'react';
import coverImage from "../Images/prof_pic.jpg";

export default function About() {
    return (
        <>
            <section>
                <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
                <h2 id="about-me" class="about">
                    About Me</h2>
                <p> My name is Viviana Rodriguez and I am 23 years old. I am a college gradute with an Associates degree in Business administration.
                    Im currently in a coding bootcamp at Rutgers University and by the end of the course I will be a full stack developer.
                    Skills that I aquire is that Im bilingual and have experience with word, excel, customer service, and assistant work. I am located in Atlanta, Georgia but I only work remotely. </p>
            </section>
        </>
    )
}