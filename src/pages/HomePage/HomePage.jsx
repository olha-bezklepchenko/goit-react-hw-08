import Container from "../../components/Container/Container";
import image from "../../assets/images/phonebook.webp";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import { FaAddressBook } from "react-icons/fa";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      <div className={css.pageWrap}>
        <div className={css.titleWrap}>
          <h1 className={css.pageTitle}>
            Hi there! I&#39;m your go-to{" "}
            <span>
              <FaAddressBook className={css.titleIcon} />
              Phone
              <span className={css.accent}>Book</span>
            </span>
          </h1>
          <h2 className={css.pageSubtitle}>
            My perks? <br /> Accessibility, reliability, and simplicity.
          </h2>
        </div>
        <img src={image} alt="phonebook" className={css.pageImg} width="350" />
      </div>

      {!isLoggedIn && (
        <div className={css.pageInform}>
          <p className={css.accent}>Don&#39;t have an account yet?</p>
          <div className={css.informText}>
            <p>Create your profile</p>
            <Link className={css.link} to="/registration">
              now
            </Link>
            <p>and start managing your contacts effortlessly.</p>
          </div>
          <div className={css.informText}>
            <p>Already have an account?</p>
            <Link className={css.link} to="/login">
              Welcome back!
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default HomePage;
