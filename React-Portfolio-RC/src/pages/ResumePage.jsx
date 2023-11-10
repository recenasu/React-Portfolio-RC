// This is the Resume page, displayed when the Resume option is selected in the Nav bar.
import { Link } from 'react-router-dom';
import resumeFile from '../assets/rick_test_resume.pdf';

const styles = {
    justifyText: {
        textAlign: 'justify',
        marginLeft: 60,
        marginRight: 60,
        paddingLeft: 20,
        paddingRight: 20,
    }
}

export default function ResumePage() {
    return (
        <div>
            <h2>Rick's Resume </h2>
            <a href={resumeFile} download><button>Download pdf</button></a>
            <ul style={styles.justifyText}>
                <li>Rick knows a little JavaScript, HTML, CSS, Node.js, React.js, Handlebars.js, Express.js, MySQL, and MongoDB</li>
                <li>This is something Rick did</li>
                <li>This is something else Rick did</li>
                <li>And this is another thing Rick did</li>
                <li>And this is yet another thing Rick did</li>
            </ul>
        </div>
    );
};