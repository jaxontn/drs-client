"use client"
import React, { useState } from 'react';

const Home = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email) {
            // Process the email or perform other actions
            console.log('Email:', email);
            // Reset the form fields after submission
            setEmail('');
        } else {
            alert('Please enter your email and check the box to subscribe.');
        }
    };

    return (
        <div>
            <br />
            <br />
            <h2 style={styles.form}>DJOHAN ROZARIO STUDIO</h2>
            <br />
            <br />
            <h1 style={styles.form}>Enter your email to retrieve your purchase(s)</h1>
            <br />
            

            <form onSubmit={handleSubmit} style={styles.form}>
                {/* Email Input Field */}
                <div style={styles.formGroup}>
                    <input 
                        type="email" 
                        id="userEmail" 
                        name="userEmail" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={styles.input}
                    />
                </div>

                
                {/* Submit Button */}
                <div style={styles.formGroup}>
                    <input className="hover-effect" type="submit" value="Retrieve" style={styles.button} />
                </div>
            </form>

            <br />
            <p className="align-center copyright">Made with ❤️ by LambdaPro Digital</p>
        </div>
    );
};

// Define styles as an object
const styles = {
    form: {
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center'
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '10px',
        width: '100%',
        borderRadius: '0px',  // Set border-radius to 0 for sharp corners
        border: '3px solid black',  // Thick black border
    },
    checkbox: {
        marginRight: '10px',
    },
    button: {

        padding: '8px 16px',  // Smaller padding for a smaller button
        backgroundColor: 'black',  // Black background color
        color: '#fff',  // White text color
        border: 'none',  // No border
        borderRadius: '0px',  // Set border-radius to 0 for sharp corners
        cursor: 'pointer',
        fontSize: '14px',  // Adjust font size for smaller button text
    },    
};

export default Home;
