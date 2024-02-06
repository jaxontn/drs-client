"use client"
import React, { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import { useSearchParams } from 'next/navigation'; //ADDED
import Link from 'next/link'; //ADDED

const Home = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [purchaseData, setPurchaseData] = useState([]);

    const searchParams = useSearchParams(); // Updated variable name
    console.log(searchParams.get("refid")); // Use the new variable name

    //setOrder to the value of refid with stat
    const [order, setOrder] = useState(searchParams.get("refid"));

    //const location = useLocation();
    //const purchaseId = location.state?.purchaseId;


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (email) {

            // Set loading state to true
            setLoading(true);

                     
            //const url = "https://jsonplaceholder.typicode.com/users";
            const url = "https://drs-api.vercel.app/api/result/" + email;
      
            let response = await fetch(url);  // Make the request to get data from
            let data = await response.json(); // Convert response to JSON format
            console.log(data);
            //if success false, set email-id as no records found
            //else if success true and data.data array is not empty,
            //display the email
            //else display "No records found"
            if(data.success === false){
                // Set email text content
                const emailElement = document.getElementById("email-id");
                if (emailElement) {
                    emailElement.innerHTML = "No records found";
                    //add a red background box
                    emailElement.style.backgroundColor = "#EF8490";
                    emailElement.style.padding = "10px";
                    //setPurchaseData(null);
                    setPurchaseData([]);
                }
            } else {

                if(data.data.length > 0){      
                    // Set email text content
                    const emailElement = document.getElementById("email-id");
                    if (emailElement) {
                        emailElement.innerHTML = "Records found, please scroll down to view purchases from: " + email;
                        //add a green background box
                        emailElement.style.backgroundColor = "#90EE90";
                        //with padding
                        emailElement.style.padding = "10px";
                    }  
                }

                if (data.success) {

                    //setPurchaseData(data.data);
                    // Sort the array so that items with 'redeemed: false' come first
                    const updatedPurchaseData = data.data.sort((a, b) => {
                        // If 'a.redeemed' is false and 'b.redeemed' is true, put 'a' first.
                        // If 'a.redeemed' is true and 'b.redeemed' is false, put 'b' first.
                        // For other cases, maintain the order.
                        return a.redeemed === b.redeemed ? 0 : a.redeemed ? 1 : -1;
                    });

                    setPurchaseData(updatedPurchaseData);
                }

            }


            // Reset loading state and form fields after submission
            setLoading(false);
            // Reset the form fields after submission
            setEmail('');
        } else {
          alert('Please enter your email.');
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
            {/* Your existing code */}
            {/*<h1>Instructions Page</h1>
            {purchaseId && (
                <p>Purchase ID from previous page: {purchaseId}</p>
            )}
            */}

            <br />
            {/*<h2 style={styles.form}>DJOHAN ROZARIO STUDIO</h2>*/}
            <img className="logo" src="/assets/images/drs-logo.jpeg" alt="DRS Photobooth" />
            <br />
            {/* Display order id */}
            {order ? (
                <h3 id="point-id" style={styles.headText}><b>Reference ID:</b><br/> {order}</h3>
            ) : (
                <h3 id="point-id" style={styles.headText}><b>No Reference ID</b></h3>
            )}


            <br />
            <h1 style={styles.form}><b>STEP ONE</b></h1>
            <h1 style={styles.form}>Pick your desired photo booth PROPS</h1>
            <br />

            <h1 style={styles.form}><b>STEP TWO</b></h1>
            <h1 style={styles.form}>Gather your Friends and/or Family in front of the camera</h1>
            <br />

            <h1 style={styles.form}><b>READY??</b></h1>
            <h1 style={styles.form}><u>Press Start Photobooth</u>, then <b>POSE</b><br/>and a <b>10 seconds timer will start!</b></h1>
            <br />

            <br />
            <br />
            {/**BUTTON START */}
            <div style={styles.form}>
                <button>
                    {order ? (
                        <Link href={`/connect?refid=${order}`} passHref>
                            <a target="_blank" rel="noopener noreferrer" style={styles.button}><b>START PHOTOBOOTH</b></a>
                        </Link>
                    ) : (
                        <a href="/retrieve" style={styles.button}><b>SELECT ORDER</b></a>
                    )}
                </button>

            </div>

            <br />
            {/**BUTTON CANCEL */}
            {order && (
                <div style={styles.form}>
                    <button>
                        <a href="/retrieve" style={styles.buttonHollow}>CANCEL</a>
                    </button>
                </div>
            )}
            
            <br />

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
    //Hollow button transparent with black border
    buttonHollow: {
        padding: '10px 16px',  // Smaller padding for a smaller button
        backgroundColor: 'transparent',  // Transparent background color
        color: 'black',  // Black text color
        border: '2px solid black',  // Thick black border
        borderRadius: '0px',  // Set border-radius to 0 for sharp corners
        cursor: 'pointer',
        fontSize: '14px',  // Adjust font size for smaller button text
    },
    buttonPressed: {

        padding: '10px 16px',  // Smaller padding for a smaller button
        backgroundColor: 'black',  // Black background color
        color: '#fff',  // White text color
        border: 'none',  // No border
        borderRadius: '0px',  // Set border-radius to 0 for sharp corners
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
    recordList: {
        
        borderRadius: '2px',
        backgroundColor: 'rgb(233, 236, 240)',
        color: 'rgb(16, 16, 16)',
        fontFamily: 'Montserrat, sans-serif',
        textTransform: 'none',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 0px, rgb(233, 236, 240) 0px 8px 0px',
        fontSize: '15px',
        minHeight: '65px',
        padding: '8px',
        margin: '16px 0px',
        border: '2px solid rgb(16, 16, 16)',
        //display: 'flex',
        pointerEvents: 'auto',
        transition: 'transform 0.2s', // Adding transition for a smooth effect
        cursor: 'pointer', // Optional: Change cursor on hover
        '&:hover': {
        transform: 'scale(1.05)' // Adjust the scale factor as needed
        }
        
    },
    doneList: {
        //background color grey
        backgroundColor: '#D3D3D3',
        //padding top and bottom 5px
      //  paddingTop: '5px',
      //  paddingBottom: '5px',
        //margin top and bottom 5px
        marginTop: '5px',
        marginBottom: '5px',
        padding: '8px',
    },
    listgroup: {
        display: 'flex',
        justifyContent: 'space-between',
        //top padding
        //paddingTop: '10px',
    },
    listgrouplink: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 10%',
    }
};

export default Home;
