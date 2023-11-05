// This component is the header of the webpage
const styles = {
    heading: {
        background: '##e9eea3',
        minHeight: 20,
        lineHeight: 1.5,
        fontSize: '1rem',
        color: '#a3e9ee',
        padding: '0 20px',
      },

}

function Header() {
    return (
        <div>
            <h1 style={styles.heading}>Rick's Portfolio</h1>
        </div>
    );
}

export default Header;