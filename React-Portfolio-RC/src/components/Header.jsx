// This component is the header of the webpage

const styles = {
    headerContainer: {
        height: 140,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    portfolioTitle: {
        paddingRight: 10,
        marginBottom: 10,
        marginTop: 50
    },
    imagePlaceholder: {
        paddingLeft: 10,
        marginBottom: 30,
        marginTop: 30 
    }
};

function Header() {
    return (
        <div style={{ ...styles.flexRow, ...styles.headerContainer }}>
            <p style={styles.imagePlaceholder}>image placeholder</p>
            <h1 style={styles.portfolioTitle}>Rick's Portfolio</h1>
        </div>
    );
}

export default Header;