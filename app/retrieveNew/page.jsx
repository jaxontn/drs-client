"use client"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [purchaseData, setPurchaseData] = useState([]);
    const [totalPurchaseAmount, setTotalPurchaseAmount] = useState(0); // New state variable


    // Use the useContext hook to get the context value
    const myContext = useContext(MyContext);

    // Check if the context is null
    if (!myContext) {
        // Handle the case when the context is null
        // You can return null or display an error message
        return null;
    }

    // Destructure properties from the context
    const { basename } = myContext;


    const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (email) {

            // Set loading state to true
            setLoading(true);

                     
            //const url = "https://jsonplaceholder.typicode.com/users";
            const url = "https://drs-api.vercel.app/api/result/" + email;
            
            try{
      
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

                        // Calculate total purchase amount with zero decimal places
                        const totalAmount = updatedPurchaseData.reduce((total, purchase) => {
                            return total + parseFloat(purchase.amount_received);
                        }, 0);

                        setTotalPurchaseAmount(totalAmount.toFixed(0)); // Round to zero decimal places
                    }

                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle the error, e.g., show an error message to the user
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
        {/* Purchase Button */}
            <div style={styles.headPadding}>
                <div style={styles.headGroup}>
                    <button>
                        <a href="https://www.djohanrozariostudio.com/" target="_blank" style={styles.button}>Studio</a>
                        <a href="https://djohanrozariostudio.vercel.app/" style={styles.button}>Package</a>
                    </button>

                    

                    {/* Display total purchase amount */}
                    {totalPurchaseAmount > 0 && (
                        <h3 id="point-id" style={styles.headText}>{totalPurchaseAmount} pts</h3>
                    )}
                    {totalPurchaseAmount === 0 && (
                        <h3 id="point-id" style={styles.headText}>0 pts</h3>
                    )}
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
                    {/* Show loading spinner or submit button based on loading state */}
                    {loading ? (
                        <input className="" type="submit" value="Searching..." style={styles.buttonPressed} disabled/>
                    ) : (
                        <input className="hover-effect" type="submit" value="Retrieve" style={styles.button} />
                    )}
                </div>
            </form>
            <br />

            <p id="email-id" className="emailReceived" style={styles.form}></p>

            {/* Display purchase data if there is data */}
            {purchaseData.length > 0 && (
                <div style={styles.form}>
                    <br/>
                    <br/>
                    <h2><b><u>Transactions</u></b></h2>
                    {purchaseData.map((purchase, index) => (
                        <div key={index}>

                            {purchase.redeemed ? (
                                //{/*Display with border */}
                                <div style={styles.doneList}>
                                    <div style={styles.listgroup}>
                                        <p><strong>{purchase.product_type}</strong></p>
                                        <p>MYR {purchase.amount_received}</p>
                                    </div>
                                    <div style={styles.listgrouplink}>
                                        <a href={purchase.receipt_url} target="_blank" rel="noopener noreferrer"><u>View Receipt</u></a>
                                        <p>Claimed</p>
                                    </div>
                                </div>
                            ) : (
                                <div key={index} style={styles.recordList}>
                                    <div style={styles.listgroup}>
                                        <p><strong>{purchase.product_type}</strong></p>
                                        <p>MYR {purchase.amount_received}</p>
                                    </div>
                                    <div style={styles.listgrouplink}>
                                        <a href={purchase.receipt_url} target="_blank" rel="noopener noreferrer"><u>View Receipt</u></a>
                                        <Link
                                            to={{
                                                pathname: '/instructions',
                                                state: { purchaseId: purchase.id }
                                            }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <u><b>Use Now</b></u>
                                        </Link>
                                    </div>
                                </div>
                                //display without border
                            )}

                            
                            {/* Add more fields as needed */}
                        </div>
                    ))}
                </div>
            )}


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
