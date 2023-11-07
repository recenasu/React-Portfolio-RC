// This is the projects component of the webpage

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
        minHeight: 300
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
        backgroundImage: 'url(/src/assets/image1.jpg)',
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
                    <img style={styles.projectCardThumbnail} src='/src/assets/svg-logo-maker.gif' alt='GIF' />
                    <a href="https://watch.screencastify.com/v/3ld63bqd0t60nh5eCyju">Application in use</a>
                    <a href="https://github.com/recenasu/10-SVG-Logo-Maker">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>MVC Tech Blog</div>
                    <img style={styles.projectCardThumbnail} src='/src/assets/mvc-tech-blog.gif' alt='GIF' />
                    <a href="https://crazy-good-mvc-tech-blog-d7c213925153.herokuapp.com/">Deployed app link</a>
                    <a href="https://github.com/recenasu/MVC-Tech-Blog">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>NoSQL Social Network</div>
                    <img style={styles.projectCardThumbnail} src='/src/assets/nosql-social-network.gif' alt='GIF' />
                    <a href="https://watch.screencastify.com/v/tvBIrl4Ir9KbS0vqILVO">Application in use</a>
                    <a href="https://github.com/recenasu/NoSQL-Social-Network">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Employee Tracker</div>
                    <img style={styles.projectCardThumbnail} src='/src/assets/employee-tracker.gif' alt='GIF' />
                    <a href="https://watch.screencastify.com/v/V8q7zN1n2WOG6oKefMyZ">Application in use</a>
                    <a href="https://github.com/recenasu/SQL-Employee-Tracker">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Weather Dashboard</div>
                    <img style={styles.projectCardThumbnail} src='/src/assets/weather-dashboard.gif' alt='GIF' />
                    <a href="https://recenasu.github.io/06-Weather-Dashboard-Project/">Deployed app link</a>
                    <a href="https://github.com/recenasu/06-Weather-Dashboard-Project">GitHub repo link</a>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Coding Quiz</div>
                    <img style={styles.projectCardThumbnail} src='/src/assets/coding-quiz.gif' alt='GIF' />
                    <a href="https://recenasu.github.io/04-Coding-Quiz-Project/">Deployed app link</a>
                    <a href="https://github.com/recenasu/04-Coding-Quiz-Project">GitHub repo link</a>
                </div>
        </div>
    );
}

export default Project;