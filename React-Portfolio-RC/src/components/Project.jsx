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
    projectCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
        background: '#052078',
        color: '#a3e9ee'
    },
    projectCardContainer: {
        marginBottom: 10,
        marginTop: 10
    },
    projectCardThumbnail: {
        height: 100,
        width: '90%',
        background: 'black'
    }
};

function Project() {
    return (
        <div style={{ ...styles.projectCardContainer, ...styles.flexRow}}>
            <div style={styles.projectCard}>
                <div>Project 1 Title</div>
                <img style={styles.projectCardThumbnail} src='/src/assets/svg-logo-maker.gif' alt='GIF'/>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
            </div>
            <div style={styles.projectCard}>
                <div>Project 2 Title</div>
                <div style={styles.projectCardThumbnail}>image</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
            </div>
            <div style={styles.projectCard}>
                <div>Project 3 Title</div>
                <div style={styles.projectCardThumbnail}>image</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
            </div>
            <div style={styles.projectCard}>
                <div>Project 4 Title</div>
                <div style={styles.projectCardThumbnail}>image</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
            </div>
            <div style={styles.projectCard}>
                <div>Project 5 Title</div>
                <div style={styles.projectCardThumbnail}>image</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
            </div>
            <div style={styles.projectCard}>
                <div>Project 6 Title</div>
                <div style={styles.projectCardThumbnail}>image</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
            </div>
        </div>
    );
}

export default Project;