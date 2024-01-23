
const Home = () => {
  return (
    <div>

      <div style={styles.headPadding}>
        <div style={styles.headGroup}>
          <button>
            <a href="https://www.djohanrozariostudio.com/" target="_blank" style={styles.button}>Studio</a>
            <a href="https://djohanrozariostudio.vercel.app/retrieve" target="_blank" style={styles.button}>Retrieve</a>
          </button>

          <h3 style={styles.headText}>0 pts</h3>
        </div>
      </div>
      <br></br>
      <img className="logo" src="/assets/images/drs-logo.jpeg" alt="DRS Photobooth" />
      <br></br>
      <br></br>
      <br></br>

      <br />
        <h1 style={styles.form}>Please choose a package that you would like to Purchase</h1>
      <br />

      <script async
        src="https://js.stripe.com/v3/buy-button.js">
      </script>

      <stripe-buy-button
        buy-button-id="buy_btn_1OScOsAGUv6MXrzyYKLpuJDe"
        publishable-key="pk_test_51LZCvvAGUv6MXrzySEmwbO1kZ4RZjWH2TKlKRGNecZPzrXWSqHYmp8x0fxiLAFdYDj1fNDKDT2d9jKbcxJ0igsJD00OQs906EL"
      >
      </stripe-buy-button>
      
      <p className="align-center copyright">made with ❤️ by LambdaPro Digital</p>

    </div>
  );
};

const styles = {
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
}

export default Home;
