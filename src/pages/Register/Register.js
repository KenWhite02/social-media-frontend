import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__left">
          <h3 className="register__logo">whitish social</h3>
          <span className="register__desc">
            Connect with friends and the world around you on whitish social.
          </span>
        </div>
        <div className="register__right">
          <div className="register__box">
            <input
              placeholder="Username"
              type="text"
              className="register__input"
            />
            <input
              placeholder="Email"
              type="email"
              className="register__input"
            />
            <input
              placeholder="Password"
              type="password"
              className="register__input"
            />
            <input
              placeholder="Confirm Password"
              type="password"
              className="register__input"
            />
            <button className="register__button">Sign Up</button>
            <button className="register__loginButton">
              Login Into Your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
