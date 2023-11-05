// This is the navigation bar component of the web page.

const styles = {
    heading: {
        background: '##e9eea3',
        minHeight: 50,
        lineHeight: 3.5,
        fontSize: '1.2rem',
        color: '#a3e9ee',
        padding: '0 20px',
    },

}

function Navigation() {
    return (
        <div>
            <ul>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    );
}

export default Navigation;

