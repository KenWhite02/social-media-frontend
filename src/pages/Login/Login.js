import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__logo">whitish social</h3>
          <span className="login__desc">
            Connect with friends and the world around you on whitish social.
          </span>
        </div>
        <div className="login__right">
          <div className="login__box">
            <input placeholder="Email" type="email" className="login__input" />
            <input
              placeholder="Password"
              type="password"
              className="login__input"
            />
            <button className="login__button">Login</button>
            <span className="login__forgot">Forgot Password?</span>
            <button className="login__registerButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
