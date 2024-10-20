import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import Container from "../../components/Container/Container";
import css from "./RegistrationPage.module.css";
import image from "../../assets/images/create-account.webp";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <Container>
      <div className={css.pageWrap}>
        <div className={css.titleWrap}>
          <h1 className={css.pageTitle}>
            Create <span className={css.accent}>Your Account</span>
          </h1>
          <p className={css.pageText}>
            Provide your information to get started.
          </p>
          <img
            className={css.pageImg}
            src={image}
            alt="people creating account"
            width="450"
          />
        </div>
        <RegistrationForm />
      </div>
      <div className={css.pageInform}>
        <p className={css.accent}>Not your first time?</p>
        <div className={css.informText}>
          <p>If you already have an account, log in </p>
          <Link className={css.link} to="/login">
            here
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default RegistrationPage;
