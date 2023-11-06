// This is the navigation bar component of the web page.

const styles = {
    navButtonsContainer: {
        display: 'flex',
        alignItems: 'center',
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
        alignItems: 'center'
    },
};

function Navigation() {
    return (
        <div style={styles.navButtonsContainer}>
            <ul style={{ listStyleType: 'none', width: '100%' }}>
                <div style={styles.flexRow}>
                    <li>ABOUT ME</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                    <li>RESUME</li>
                </div>
            </ul>
        </div>
    );
}

export default Navigation;

