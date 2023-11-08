// This is the contact component of the web page
import { useState } from 'react';
import '../App.css';

// Helper function import for email validation check
import { validateEmail } from './utils/helpers';

function Form() {
    // Create state variables for the form fields, set the initial values to an empty string
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


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
        setErrorMessage('Please provide a name and valid email');
        return;
    } 

    alert(`Thank you ${name}! I'll get back to you shortly at ${email}!`);
    console.log(`email: ${email}`);
    console.log(`Name: ${name}`);
    console.log(`Message: ${message}`);

    setName('');
    setEmail('');
    setMessage('');
    
}

return (
    <div>
        <h3>Please enter your contact information, and I'll get right back to you! Thank you!</h3>
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
            <button type="submit">Submit</button>
        </form>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
                </div>
        )}
    </div>
);
}

export default Form;

