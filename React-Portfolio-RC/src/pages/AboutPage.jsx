// This is the About Me page, displayed as the home page and when 'About Me' is clicked in the Nav bar.

const styles = {
    justifyText: {
        textAlign: 'justify',
        marginLeft: 60,
        marginRight: 60,
        paddingLeft: 20,
        paddingRight: 20,
    }
}

export default function AboutPage() {
    return (
        <div>
            <h2>Software Developer, Technical Communicator, Veteran Submariner, Bestselling Author, Husband, Dad</h2>
            <ul>
                <li style={styles.justifyText}>
                    Technical communicator accustomed to high tempo, compressed schedule project environments requiring quick turn-around on customer deliverables.
                    </li>
                <li style={styles.justifyText}>
                    On-time and within-budget delivery of stream-lined, user-friendly, highly interactive webpages.
                    </li>
                <li style={styles.justifyText}>
                    HTML, CSS, and JavaScript coding specialist committed to achieving customer goals by employing thorough research and designing specialized web applications.
                </li>
                <li style={styles.justifyText}>
                    Veteran US Navy Submarine Officer.
                    </li>
                <li style={styles.justifyText}>
                    <i>USA TODAY</i> Bestselling Author of 13 novels.
                    </li>
            </ul>
        </div>
    );
};
