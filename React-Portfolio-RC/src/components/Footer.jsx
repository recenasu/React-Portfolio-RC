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
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

}

function Footer() {
    return (
        <div>
            <ul>
                <div style={styles.flexRow}>
                    <li>My GitHub profile link</li>
                    <li>My LinkedIn profile link</li>
                    <li>Another link</li>
                </div>
            </ul>
        </div>
    );
}

export default Footer;

