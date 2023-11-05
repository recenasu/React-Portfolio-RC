// This component is the header of the webpage
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

function Header() {
    return (
        <header>
            <h1>Rick's Portfolio</h1>
        </header>
    );
}

export default Header;