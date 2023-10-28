import styles from "./Scooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { useAdminUpdateContext } from "./AdminContext";

function Scooter(props) {
  const { deleteScooter } = useAdminUpdateContext();

  const deleteCodeHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#331d2c",
      cancelButtonColor: "#a78295",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteScooter(props.id);
        Swal.fire({
          title: "Deleted!",
          text: "Your code has been deleted.",
          icon: "success",
          confirmButtonColor: "#331d2c",
        });
      }
    });
  };

  return (
    <div className={styles.scooterContainer}>
      <div className={styles.contentCard}>
        <span>Id: {props.id}</span>
        <span>City: {props.city}</span>
        <span>Distance: {props.distance} km</span>
        <span>Is free: {props.isFree ? "yes" : "no"}</span>
      </div>

      <button className={styles.deleteButton} onClick={deleteCodeHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Scooter;
