import styles from "./App.module.css";
import backgroundImage from "./images/background.png";
import SearchCity from "./components/SearchCity";
import { useAppContext } from "./components/AppContext";
import ScootersList from "./components/ScootersList";
import Map from "./components/Map";

function App() {
  const { scootersData } = useAppContext();

  return (
    <div className={styles.appContainer}>
      <img src={backgroundImage} className={styles.backgroundImage} />
      <div className={styles.appContentContainer}>
        <SearchCity />
        <ScootersList scooters={scootersData} />
        <Map />
      </div>
    </div>
  );
}

export default App;
