import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import searchInfo from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectNameFilter);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={searchInfo.containerSearch}>
      <label>Find Contacts by name</label>
      <input
        className={searchInfo.search}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
