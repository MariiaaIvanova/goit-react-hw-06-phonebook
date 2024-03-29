import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List, Error } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
    <List>
      {contactsList.length > 0 ? (
        contactsList.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              name={name}
              number={number}
              id={id}
              onClick={handleDeleteContact}
            />
          );
        })
      ) : (
        <Error>
          <strong></strong>
        </Error>
      )}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;