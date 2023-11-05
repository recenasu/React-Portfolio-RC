// This is the projects component of the webpage

const styles = {
    card: {
      margin: 20,
      background: '#2240D5',
    },
    heading: {
      background: '#8422D5',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 20,
    },
  };

  function Project() {
    return (
        <div>
            <div>Project 1 Title</div>
            <div>Deployed app link</div>
            <div>GitHub repo link</div>
            <div>image</div>
        </div>
       );
  }

export default Project;