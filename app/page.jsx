
"use client"
import React, { useState, useEffect} from 'react';

const Home = () => {

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

      <div style={styles.headPadding}>
        <div style={styles.headGroup}>
          <button>
            <a href="https://www.djohanrozariostudio.com/" target="_blank" style={styles.button}>Studio</a>
            <a href="https://djohanrozariostudio.vercel.app/retrieve" style={styles.button}>Retrieve</a>
          </button>

          <h3 style={styles.headText}>0 pts</h3>
        </div>
      </div>
      <br></br>
      <img className="logo" src="/assets/images/drs-logo.jpeg" alt="DRS Photobooth" />
      <br></br>

      {/*Display instagram and facebook icon with link */}
      <div className="social-icons" style={styles.socialGroup}>
        <a href="https://www.instagram.com/djohanrozariostudio/" target="_blank"><img src="/assets/images/ig.svg" alt="Instagram" style={styles.socialIcon}/></a>
        <a href="https://www.facebook.com/djohanrozariostudio" target="_blank"><img src="/assets/images/fb.svg" alt="Facebook" style={styles.socialIcon}/></a>
        <a href="https://www.facebook.com/djohanrozariostudio" target="_blank"><img src="/assets/images/wa.svg" alt="WhatsApp" style={styles.socialIcon}/></a>
      </div>


      <br />
      <div style={styles.form}>
        <h1>Please choose a package:</h1>
      </div>
      <br />

      <script async
        src="https://js.stripe.com/v3/buy-button.js">
      </script>

      <div style={styles.form}>
        <stripe-buy-button style={styles.form}
          buy-button-id="buy_btn_1OScOsAGUv6MXrzyYKLpuJDe"
          publishable-key="pk_test_51LZCvvAGUv6MXrzySEmwbO1kZ4RZjWH2TKlKRGNecZPzrXWSqHYmp8x0fxiLAFdYDj1fNDKDT2d9jKbcxJ0igsJD00OQs906EL"
        >
        </stripe-buy-button>
      </div>
      
      <p className="align-center copyright">made with ❤️ by LambdaPro Digital</p>

    </div>
  );
};

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
}

export default Home;
