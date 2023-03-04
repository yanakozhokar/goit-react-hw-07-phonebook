import { useDispatch } from 'react-redux';
import { onFilterChange } from 'redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={event =>
          dispatch(
            onFilterChange(event.currentTarget.value.trim().toLowerCase())
          )
        }
        required
      />
    </label>
  );
};

export default Filter;
