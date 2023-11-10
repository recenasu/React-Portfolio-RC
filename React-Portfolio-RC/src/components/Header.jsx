// This component is the header of the webpage
import { Link } from 'react-router-dom';
import myImage from '../assets/myimage.jpg';
// import myBackground from '../assets/image1.jpg';

const styles = {
    headerContainer: {
        height: 300,
        width: '100%',
        backgroundColor: '#DDE5F0',
        backgroundImage: `url(./assets/image1.jpg)`,
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
            <Link to='contact'><img style={{ borderStyle: 'solid', borderColor: 'black'  }} src={myImage}/></Link>
            <h1 style={styles.portfolioTitle}>Rick's Portfolio</h1>
        </div>
    );
}

export default Header;