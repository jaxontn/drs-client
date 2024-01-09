"use client"
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [email, setEmail] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (email) {

                     
            //const url = "https://jsonplaceholder.typicode.com/users";
            const url = "https://drs-api.vercel.app/api/result/" + email;
      
            let response = await fetch(url);  // Make the request to get data from
            let data = await response.json(); // Convert response to JSON format

            //if data.data array is not empty,
            //display the email
            //else display "No records found"
            if(data.data.length > 0){      
                // Set email text content
                const emailElement = document.getElementById("email-id");
                if (emailElement) {
                    emailElement.innerHTML = "Please scroll down for records from " + email;
                }  
            } else {
                // Set email text content
                const emailElement = document.getElementById("email-id");
                if (emailElement) {
                    emailElement.innerHTML = "No records found";
                }
            }

            console.log(data);

          // Reset the form fields after submission
          setEmail('');
        } else {
          alert('Please enter your email.');
        }
    };

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email) {
          try {
            const response = await fetch(`/api/getResults?email=${encodeURIComponent(email)}`);
      
            if (response.ok) {
              const data = await response.json();
              console.log(data);
              // Process the data as required
            } else {
              console.error('Failed to fetch data');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
      
          // Reset the form fields after submission
          setEmail('');
        } else {
          alert('Please enter your email.');
        }
    };*/
      
      


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
            <div style={styles.headPadding}>
                <div style={styles.headGroup}>
                    <button>
                        <a href="https://www.djohanrozariostudio.com/" target="_blank" style={styles.button}>Studio</a>
                        <a href="https://djohanrozariostudio.vercel.app/" target="_blank" style={styles.button}>Package</a>
                    </button>

                    

                    <h3 style={styles.headText}>0 pts</h3>
                </div>
            </div>
            <br />
            {/*<h2 style={styles.form}>DJOHAN ROZARIO STUDIO</h2>*/}
            <img className="logo" src="/assets/images/drs-logo.jpeg" alt="DRS Photobooth" />
            <br />
            

            {/*Display instagram and facebook icon with link */}
            <div className="social-icons" style={styles.socialGroup}>
                <a href="https://www.instagram.com/djohanrozariostudio/" target="_blank"><img src="/assets/images/ig.svg" alt="Instagram" style={styles.socialIcon}/></a>
                <a href="https://www.facebook.com/djohanrozariostudio" target="_blank"><img src="/assets/images/fb.svg" alt="Facebook" style={styles.socialIcon}/></a>
                <a href="https://www.facebook.com/djohanrozariostudio" target="_blank"><img src="/assets/images/wa.svg" alt="WhatsApp" style={styles.socialIcon}/></a>
            </div>
            <br />

            <h1 style={styles.form}><b>---THANK YOU---</b></h1>
            <h1 style={styles.form}>for your support</h1>
            <br />

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

            <p id="email-id" className="emailReceived" style={styles.form}>Email: </p>

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
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '15px',  // Set border-radius to 0 for sharp corners
        border: '1.5px solid black',  // Thick black border
        fontSize: '14px',
        textAlign: 'center',
    },
    headPadding: {
        paddingTop: '10px'
    },
    input: {
        padding: '10px',
        width: '100%',
        borderRadius: '0px',  // Set border-radius to 0 for sharp corners
        border: '2px solid black',  // Thick black border
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
    socialIcon: {
        width: '35px',  // Set the width
        height: '35px', // Set the height
        marginRight: '10px', // Add some spacing if needed
        marginLeft: '10px',
    },   
    socialGroup: {
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',       // Align items vertically centered
        justifyContent: 'center',   // Align content horizontally centered
        

    },
};

export default Home;
