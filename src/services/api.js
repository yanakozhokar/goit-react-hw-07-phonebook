import axios from 'axios';

axios.defaults.baseURL = 'https://64036bf1f61d96ac487f65de.mockapi.io';

export const getContactsAPI = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteContactAPI = async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const addContactAPI = async newContact => {
  try {
    const { data } = await axios.post(`/contacts`, newContact);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
