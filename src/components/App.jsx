import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const error = useSelector(state => state.contacts.contacts.error);

  return (
    <Container>
      <div>
        {error !== null && <p>Ooops, smth is wrong... Message: '{error}'</p>}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
