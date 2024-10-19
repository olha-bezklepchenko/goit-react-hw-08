import Container from "../../components/Container/Container.jsx";
import css from "./NotFoundPage.module.css";
import image from "../../assets/images/error-404-page.webp";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <img src={image} alt="error 404" className={css.image} />
        <NavLink className={css.btn} to="/">
          Go home
        </NavLink>

        <div className={css.titleWrapper}>
          <h2 className={css.title}>Looks like you&#39;ve gotten lost...</h2>
          <p className={css.message}>
            The page you were looking for is no longer here.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPage;
