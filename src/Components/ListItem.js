import list_icon from '../assets/images/icon-list.svg'

const ListItem = ({ item }) => {
  return (
    <li>
      <img src={list_icon} alt="checkmark" />
      <p>{item}</p>
    </li>
  );
};

export default ListItem;
