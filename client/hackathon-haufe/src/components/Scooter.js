import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Scooter.module.css";
import { useAppUpdateContext } from "./AppContext";

function Scooter(props) {
  const { reserveScooter } = useAppUpdateContext();

  const reserveScotterHandler = () => {
    console.log(props.id);
    reserveScooter(false, props.id);
  };

  return (
    <div className={styles.scooterContainer}>
      <div className={styles.contentCard}>
        <span>Distance: {props.distance} km</span>
      </div>
      <button className={styles.reserveButton} onClick={reserveScotterHandler}>
        <FontAwesomeIcon icon={faCircleCheck} />
      </button>
    </div>
  );
}

export default Scooter;
