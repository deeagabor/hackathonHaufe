import styles from "./App.module.css";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ScootersList from "./components/ScootersList";
import { useState, useRef, useEffect } from "react";
import {
  useAdminContext,
  useAdminUpdateContext,
} from "./components/AdminContext";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const { addNewScooter } = useAdminUpdateContext();
  const { scootersData } = useAdminContext();

  const cityRef = useRef("");
  const distanceRef = useRef("");
  const formOverlayRef = useRef();

  const addScooterHandler = () => {
    setIsFormVisible(true);
  };

  const overlayClickHandler = (e) => {
    if (e.target === formOverlayRef.current) {
      setIsFormVisible(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (cityRef.current.value) {
      let newScooterData = {
        city: cityRef.current.value,
        distance: distanceRef.current.value,
      };
      addNewScooter(newScooterData);
      setIsFormVisible(false);
    }
  };

  const closeFormHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.contentContainer}>
          <ScootersList scooters={scootersData} />
          <button className={styles.addButton} onClick={addScooterHandler}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
      {isFormVisible && (
        <div
          className={styles.formOverlay}
          onClick={overlayClickHandler}
          ref={formOverlayRef}
        >
          <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.closeButtonContainer}>
              <button
                className={styles.closeFormButton}
                onClick={closeFormHandler}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <span>Add Scooter</span>
            <input
              type="text"
              ref={cityRef}
              className={styles.scooterInput}
              placeholder="Enter city..."
            />
            <input
              type="text"
              ref={distanceRef}
              className={styles.scooterInput}
              placeholder="Enter distance..."
            />
            <button type="submit" className={styles.addScooterButton}>
              ADD
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
