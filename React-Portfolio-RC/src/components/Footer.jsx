// This is the footer component of the web page.


const styles = {
    footerLinksContainer: {
        display: 'flex',
        alignItems: 'center',
        background: '#780520',
        color: '#a3e9ee',
        height: 40,
        width: '100%',
        fontSize: 14,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
    };

    function Footer() {
        return (
            <div style={styles.footerLinksContainer}>
                <ul style={{ listStyleType: 'none', width: '100%' }}>
                    <div style={styles.flexRow}>
                        <li>GitHub Profile</li>
                        <li>LinkedIn</li>
                        <li>Another link</li>
                    </div>
                </ul>
            </div>
        );
}

export default Footer;

