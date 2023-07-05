import PropTypes from 'prop-types';
import { Item, ItemList, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, onClick }) => {
  return (
    <Item key={id}>
      <ItemList>
        <p>
          {name} : {number}
        </p>
        <Button type="button" onClick={() => onClick(id)}>
          Delete
        </Button>
      </ItemList>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;