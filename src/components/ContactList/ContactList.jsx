import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contactsList);
  const filter = useSelector(state => state.filter.filter);
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter);
  });
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
