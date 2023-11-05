// This is the projects component of the webpage

const styles = {
    card: {
        margin: 20,
        background: '#2240D5',
    },
    heading: {
        background: '#8422D5',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: 'white',
        padding: '0 20px',
    },
    content: {
        padding: 20,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
};

function Project() {
    return (
        <div style={styles.flexRow}>
            <div>
                <div>Project 1 Title</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
                <div>image</div>
            </div>
            <div>
                <div>Project 2 Title</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
                <div>image</div>
            </div>
            <div>
                <div>Project 3 Title</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
                <div>image</div>
            </div>
            <div>
                <div>Project 4 Title</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
                <div>image</div>
            </div>
            <div>
                <div>Project 5 Title</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
                <div>image</div>
            </div>
            <div>
                <div>Project 6 Title</div>
                <div>Deployed app link</div>
                <div>GitHub repo link</div>
                <div>image</div>
            </div>
        </div>
    );
}

export default Project;