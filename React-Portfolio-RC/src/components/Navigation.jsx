// This is the navigation bar component of the web page.
// Import react Link component for link navigation
import { NavLink } from 'react-router-dom';

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
    listItem: {
      width: 120,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
};

function Navigation() {
    return (
        <div style={styles.navButtonsContainer}>
            <ul style={{ listStyleType: 'none', width: '100%' }}>
                <div style={styles.flexRow}>
                    <NavLink key={1}
                    to='/'
                    style={({ isActive }) => {
                        return {
                            background: isActive ? '#F7FAE3' : '',
                            color: isActive ? 'blue' : '',
                        }
                    }}
                    className="nav_link" >
                        <li style={styles.listItem}>ABOUT ME</li>
                    </NavLink>
                    <NavLink key={2} to='portfolio' style={({ isActive }) => {
                        return {
                            background: isActive ? '#F7FAE3' : '',
                            color: isActive ? 'blue' : '',
                        }
                    }}
                    className="nav_link">
                        <li style={styles.listItem}>PORTFOLIO</li>
                    </NavLink>
                    <NavLink key={3} to='contact' style={({ isActive }) => {
                        return {
                            background: isActive ? '#F7FAE3' : '',
                            color: isActive ? 'blue' : '',
                        }
                    }}
                    className="nav_link">
                        <li style={styles.listItem}>CONTACT</li>
                    </NavLink>
                    <NavLink key={4} to='resume' style={({ isActive }) => {
                        return {
                            background: isActive ? '#F7FAE3' : '',
                            color: isActive ? 'blue' : '',
                        }
                    }}
                    className="nav_link">
                        <li style={styles.listItem}>RESUME</li>
                    </NavLink>
                </div>
            </ul>
        </div>
    );
}

export default Navigation;

