import styles from "./SearchCity.module.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useAppUpdateContext } from "./AppContext";

function SearchCity() {
  let enteredCityRef = useRef();
  const { seeAllScooters } = useAppUpdateContext();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const cityName = enteredCityRef.current.value;
    seeAllScooters(cityName);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={styles.searchContainer}>
        <input
          type="text"
          ref={enteredCityRef}
          placeholder="Search your city..."
          className={styles.inputCity}
        ></input>
        <button type="submit" className={styles.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}

export default SearchCity;
