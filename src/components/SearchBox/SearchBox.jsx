import styles from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={id} className={styles.label}>
        <input
          id={id}
          type="text"
          placeholder="Find contacts"
          value={filter}
          onChange={handleChange}
          className={styles.input}
        />
      </label>
    </div>
  );
}
