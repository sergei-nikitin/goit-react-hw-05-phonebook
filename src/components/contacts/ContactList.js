import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./ContactList.module.css";
import animation from "./AnimationContacts.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles}>
      {contacts.map((contact) => (
        <CSSTransition key={contact.name} timeout={250} classNames={animation}>
          <li className={styles.item}>
            {contact.name}: {contact.number}
            <button
              className={styles.deleteBtn}
              type="button"
              onClick={() => onDeleteContact(contact.name)}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export default ContactList;
