
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

export default Home;
