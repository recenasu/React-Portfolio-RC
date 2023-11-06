// This is the navigation bar component of the web page.

const styles = {
    navButtonsContainer: {
        background: '#780520',
        color: '#a3e9ee',
        height: 40,
        width: '100%',
        fontSize: 16,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
};

function Navigation() {
    return (
        <div style={styles.navButtonsContainer}>
            <ul style={{ listStyleType: 'none' }}>
                <div style={styles.flexRow}>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>Resume</li>
                </div>
            </ul>
        </div>
    );
}

export default Navigation;

