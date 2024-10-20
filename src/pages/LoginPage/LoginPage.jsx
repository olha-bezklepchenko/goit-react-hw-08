import LoginForm from "../../components/LoginForm/LoginForm";
import Container from "../../components/Container/Container";
import css from "./LoginPage.module.css";
import image from "../../assets/images/people-login.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Container>
      <div className={css.pageWrap}>
        <div className={css.pageTopWrap}>
          <div className={css.titleWrap}>
            <h1 className={css.pageTitle}>
              Log In to
              <span className={css.accent}> Your Account</span>
            </h1>
            <p className={css.pageText}>
              Enter your credentials to access your account.
            </p>
            <img
              className={css.pageImg}
              src={image}
              alt="people log in website"
              width="400"
            />
          </div>
          <LoginForm />
        </div>
        <div className={css.pageInform}>
          <p className={css.accent}>New here?</p>
          <div className={css.informText}>
            <p>Start by creating an account</p>
            <Link className={css.link} to="/register">
              now
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;
