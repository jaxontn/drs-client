"use client"
import React, { useState, useEffect } from 'react';

const Home = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if (email) {
            // Process the email or perform other actions
            console.log('Email:', email);

            //Do an ajax search to https://drs-api.vercel.app/api/history and retrieve the json
            //Then display the json in a table

            /*try {
                const response = await axios.get('https://drs-api.vercel.app/api/history', { params: { userEmail: email } });
                const data = response.data;
    
                // Assuming the data object contains the user's purchases
                console.log('Purchases:', data);
    
                // Reset form fields
                setEmail('');
            } catch (error) {
                console.error('Error:', error);
            }*/

            // Reset the form fields after submission
            setEmail('');
        } else {
            alert('Please enter your email and check the box to subscribe.');
        }
    };

    useEffect(() => {
        // Load Brevo Conversations script when the component mounts
        (function(d, w, c) {
            w.BrevoConversationsID = '6580f96472a426285039a024';
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
            var s = d.createElement('script');
            s.async = true;
            s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
            if (d.head) d.head.appendChild(s);
        })(document, window, 'BrevoConversations');
    }, []);  // Empty dependency array ensures this useEffect runs once when the component mounts

    return (
        <div>
        {/* Purchase Button */}
            <div style={styles.headGroup}>
                <button>
                    <a href="https://www.djohanrozariostudio.com/" target="_blank" style={styles.button}>Studio</a>
                </button>

                <div style={styles.headPadding}>
                    <h3 style={styles.headText}>0 points</h3>
                </div>
            </div>
            <br />
            <br />
            <h2 style={styles.form}>DJOHAN ROZARIO STUDIO</h2>
            <br />
            <br />
            <h1 style={styles.form}><b>---THANK YOU---</b></h1>
            <h1 style={styles.form}>for your payment</h1>
            <br />
            <h1 style={styles.form}>Please enter your email to retrieve your purchase(s)</h1>
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

            <p className="emailReceived" style={styles.form}>Email: </p>

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
        textAlign: 'center',
        
    },
    formGroup: {
        marginBottom: '15px',
    },
    headGroup: {
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        //top padding
        //paddingTop: '10px',
    },
    headText: {
        padding: '5px',
        borderRadius: '10px',  // Set border-radius to 0 for sharp corners
        border: '2px solid black',  // Thick black border
        fontSize: '10px',
    },
    headPadding: {
        paddingTop: '10px'
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

        padding: '10px 16px',  // Smaller padding for a smaller button
        backgroundColor: 'black',  // Black background color
        color: '#fff',  // White text color
        border: 'none',  // No border
        borderRadius: '0px',  // Set border-radius to 0 for sharp corners
        cursor: 'pointer',
        fontSize: '14px',  // Adjust font size for smaller button text
    },    
};

export default Home;
