import './customerLoginStyles.css'

const Login = () => {

    return (

        <div>
            <img src="/images/CustomerLoginBackground.png" alt="picture" />
            <div class="nav-bar">
                <div class="nav-bar-child">
                    <a href="#" class="nav-bar-link">Home</a>
                    <a href="#" class="nav-bar-link">Menu</a>
                    <a href="#" class="nav-bar-link">Order</a>
                    <a href="#" class="nav-bar-link">Contact Us</a>
                </div>
            </div>
            <div class="login-container">
                <div class="login-img">
                    {/*the correct way to reperenst the image */}
                    <img src="/images/OaxacaLogo.png" alt="picture" />
                    {/*<img src="images/OaxacaLogo.png" alt="Logo">*/}
                </div>
                <div class="login-text">CUSTOMER LOGIN</div>
                <div class="spacer"></div>
                <div class="text-button">
                    <input type="text" class="input-text" value="USERNAME"></input>
                    <input type="text" class="input-text" value="PASSWORD"></input>
                    <button type="button" class="input-text largerFont">LOGIN</button>
                </div>
            </div>
        </div>


    )

}

export default Login