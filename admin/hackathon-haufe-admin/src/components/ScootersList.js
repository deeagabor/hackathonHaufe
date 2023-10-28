import Scooter from "./Scooter";
import styles from "./ScootersList.module.css";

function ScootersList(props) {
  return (
    <div className={styles.scootersListContainer}>
      {props.scooters &&
        props.scooters.map((scooter) => {
          return (
            <Scooter
              key={scooter._id}
              id={scooter._id}
              city={scooter.city}
              distance={scooter.distance}
              isFree={scooter.isFree}
            />
          );
        })}
    </div>
  );
}

export default ScootersList;
