import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my projects and skills</p>
            </header>
            <section className="about-me">
                <h2>About Me</h2>
                <p>Hi, I'm [Your Name], a passionate developer with experience in [Your Skills].</p>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-list">
                    <div className="project-item">
                        <h3>Project 1</h3>
                        <p>Description of project 1.</p>
                    </div>
                    <div className="project-item">
                        <h3>Project 2</h3>
                        <p>Description of project 2.</p>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </section>
            <footer className="footer">
                <p>Contact me at [Your Email]</p>
            </footer>
        </div>
    );
};

export default LandingPage;