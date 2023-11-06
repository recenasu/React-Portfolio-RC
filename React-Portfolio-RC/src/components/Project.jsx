// This is the projects component of the webpage

const styles = {
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    colorsA: {
        background: '#052078',
        color: '#a3e9ee'
    },
    colorsB: {
        background: '#207805',
        color: '#eea3e9'
    },
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
    projectCardBottom: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        background: '#052078',
        color: '#a3e9ee',
        width: '20%',
        minHeight: 230
    },
    projectCardParentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 0,
        marginTop: 0,
        width: '100%',
        backgroundImage: 'url(/src/assets/image1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        minHeight: 500
    },
    projectCardContainer: {
        backgroundColor: 'rgba(246, 248, 251, 0.5)',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        minHeight: 250
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
            <div style={{ ...styles.projectCardContainer, ...styles.flexRow }}>
                <div style={styles.projectCardTop}>
                    <div>SVG Logo Maker</div>
                    <img style={styles.projectCardThumbnail} src='/src/assets/svg-logo-maker.gif' alt='GIF' />
                    <div>Deployed app link</div>
                    <div>GitHub repo link</div>
                </div>
                <div style={styles.projectCardTop}>
                    <div>Project 2 Title</div>
                    <div style={styles.projectCardThumbnail}>image</div>
                    <div>Deployed app link</div>
                    <div>GitHub repo link</div>
                </div>
            </div>
            <div style={{ ...styles.projectCardContainer, ...styles.flexRow }}>
                <div style={styles.projectCardBottom}>
                    <div>Project 3 Title</div>
                    <div style={styles.projectCardThumbnail}>image</div>
                    <div>Deployed app link</div>
                    <div>GitHub repo link</div>
                </div>
                <div style={styles.projectCardBottom}>
                    <div>Project 4 Title</div>
                    <div style={styles.projectCardThumbnail}>image</div>
                    <div>Deployed app link</div>
                    <div>GitHub repo link</div>
                </div>
                <div style={styles.projectCardBottom}>
                    <div>Project 5 Title</div>
                    <div style={styles.projectCardThumbnail}>image</div>
                    <div>Deployed app link</div>
                    <div>GitHub repo link</div>
                </div>
                <div style={styles.projectCardBottom}>
                    <div>Project 6 Title</div>
                    <div style={styles.projectCardThumbnail}>image</div>
                    <div>Deployed app link</div>
                    <div>GitHub repo link</div>
                </div>
            </div>
        </div>
    );
}

export default Project;