// This is the footer component of the web page.


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

function Footer() {
    return (
        <div>
            <ul>
                <li>My GitHub profile link</li>
                <li>My LinkedIn profile link</li>
                <li>Another link</li>
            </ul>
        </div>
    );
}

export default Footer;

