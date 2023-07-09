import PropTypes from 'prop-types';
import css from './PhonebookContacts.module.css';

const PhonebookContacts = ({ contacts,onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button className={css.button} type="button" onClick={() => onDeleteContact(id)}>
          Delete Contact
        </button>
        </li>
      ))}
    </ul>
   );
};

PhonebookContacts.propTypes = {
  onDeleteContact : PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default PhonebookContacts;