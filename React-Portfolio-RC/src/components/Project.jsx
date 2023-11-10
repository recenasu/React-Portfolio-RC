// This is the projects component of the webpage
import { Link } from 'react-router-dom';
import svgLogoMaker from '../assets/svg-logo-maker.gif';
import mvcTechBlog from '../assets/mvc-tech-blog.gif';
import nosqlSocialNet from '../assets/nosql-social-network.gif';
import employeeTracker from '../assets/employee-tracker.gif';
import myNextBackground from '../assets/image1.jpg';
import wxDashboard from '../assets/weather-dashboard.gif';
import codingQuiz from '../assets/coding-quiz.gif';

const styles = {
    projectCardTop: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        background: '#052078',
        color: '#a3e9ee',
        width: '35%',
        minHeight: 300,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    projectCardParentContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 0,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        backgroundImage: `url(../assets/image1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        minHeight: 500
    },
    projectCardThumbnail: {
        minHeight: 100,
        width: '90%',
        background: 'black'
    }
};

function Project() {
    return (
        <div style={styles.projectCardParentContainer}>
                <div style={styles.projectCardTop}>
                    <div>SVG Logo Maker</div>
                    <a href="https://watch.screencastify.com/v/3ld63bqd0t60nh5eCyju"><img style={styles.projectCardThumbnail} src={svgLogoMaker} alt='GIF' /></a>
                    <a href="https://watch.screencastify.com/v/3ld63bqd0t60nh5eCyju">Application in use</a>
                    <a href="https://github.com/recenasu/10-SVG-Logo-Maker">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>MVC Tech Blog</div>
                    <a href="https://crazy-good-mvc-tech-blog-d7c213925153.herokuapp.com/"><img style={styles.projectCardThumbnail} src={mvcTechBlog} alt='GIF' /></a>
                    <a href="https://crazy-good-mvc-tech-blog-d7c213925153.herokuapp.com/">Deployed app link</a>
                    <a href="https://github.com/recenasu/MVC-Tech-Blog">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>NoSQL Social Network</div>
                    <a href="https://watch.screencastify.com/v/tvBIrl4Ir9KbS0vqILVO"><img style={styles.projectCardThumbnail} src={nosqlSocialNet} alt='GIF' /></a>
                    <a href="https://watch.screencastify.com/v/tvBIrl4Ir9KbS0vqILVO">Application in use</a>
                    <a href="https://github.com/recenasu/NoSQL-Social-Network">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Employee Tracker</div>
                    <a href="https://watch.screencastify.com/v/V8q7zN1n2WOG6oKefMyZ"><img style={styles.projectCardThumbnail} src={employeeTracker} alt='GIF' /></a>
                    <a href="https://watch.screencastify.com/v/V8q7zN1n2WOG6oKefMyZ">Application in use</a>
                    <a href="https://github.com/recenasu/SQL-Employee-Tracker">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Weather Dashboard</div>
                    <a href="https://recenasu.github.io/06-Weather-Dashboard-Project/"><img style={styles.projectCardThumbnail} src={wxDashboard} alt='GIF' /></a>
                    <a href="https://recenasu.github.io/06-Weather-Dashboard-Project/">Deployed app link</a>
                    <a href="https://github.com/recenasu/06-Weather-Dashboard-Project">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Coding Quiz</div>
                    <a href="https://recenasu.github.io/04-Coding-Quiz-Project/"><img style={styles.projectCardThumbnail} src={codingQuiz} alt='GIF' /></a>
                    <a href="https://recenasu.github.io/04-Coding-Quiz-Project/">Deployed app link</a>
                    <a href="https://github.com/recenasu/04-Coding-Quiz-Project">GitHub repo link</a>
                </div>
        </div>
    );
}

export default Project;