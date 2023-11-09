// This is the contact component of the web page
import { useState } from 'react';
import '../App.css';

// Helper function import for email validation check
import { validateEmail } from './utils/helpers';

const styles = {
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F7FAE3',
        width: '100%',
    },
}


function Form() {
    // Create state variables for the form fields, set the initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [feedbackMessage, setFeedbackMessage] = useState('');


    const handleInputChange = (e) => {
        // Get the values that triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };


    const handleFormSubmit = (e) => {
        // prevent the default page refresh upon form submit
        e.preventDefault();

        // Check if email is valid. Display error if invalid.
        if (!validateEmail(email) || !name) {
            setFeedbackMessage('Please provide a name and valid email');
            return;
        } else {
            setFeedbackMessage(`Thank you, ${name}! I'll get back to you shortly at ${email}!`);
            console.log(`email: ${email}`);
            console.log(`Name: ${name}`);
            console.log(`Message: ${message}`);
        }

        setName('');
        setEmail('');
        setMessage('');

    }

    return (
        <div style={styles.formContainer}>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="name"
                    placeholder="name"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="message"
                    placeholder="message"
                />
            {feedbackMessage ? (
                <div>
                    <p className="error-text">{feedbackMessage}</p>
                </div>
            ) : (
                <div>
                <p className="error-text">Please enter your contact information, and I'll get right back to you! Thank you!</p>
            </div> 
            )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;

