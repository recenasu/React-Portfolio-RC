// This component is the header of the webpage

const styles = {
    headerContainer: {
        height: 300,
        backgroundColor: '#B0C4DE',
        width: '100%',
        backgroundColor: '#DDE5F0',
        backgroundImage: 'url(/src/assets/image1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
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
            <img src='/src/assets/myimage.jpg'/>
            <h1 style={styles.portfolioTitle}>Rick's Portfolio</h1>
        </div>
    );
}

export default Header;