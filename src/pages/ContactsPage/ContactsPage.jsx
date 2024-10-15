import ContactForm from "./components/ContactForm/ContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import { FaAddressBook } from "react-icons/fa";
import css from "./App.module.css";
import "modern-normalize/modern-normalize.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "./redux/contactsSlice.js";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import Loader from "./components/Loader/Loader.jsx";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={css.title}>
        <FaAddressBook className={css.titleIcon} />
        Phone<span className={css.titleAccent}>Book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError && (
        <p className={css.error}>
          Something went wrong...
          <span className={css.errorMessage}>
            Please check your internet connection
          </span>
        </p>
      )}
      <ContactList />
    </>
  );
};

export default ContactsPage;
