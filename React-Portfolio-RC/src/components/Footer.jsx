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
                    <a href="https://github.com/recenasu"><li>GitHub Profile</li></a>
                    <a href="https://www.linkedin.com/in/rick-cooke-56b34b8b"><li>LinkedIn</li></a>
                    <a href="https://rcameroncooke.com/"><li>rcameroncooke.com</li></a>
                    </div>
                </ul>
            </div>
        );
}

export default Footer;

