import React, { useContext, useCallback, useState, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppUpdateContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function useAppUpdateContext() {
  return useContext(AppUpdateContext);
}

export function AppProvider(props) {
  const [scootersData, setScootersData] = useState([]);

  const seeAllScooters = useCallback(
    async (city) => {
      try {
        const response = await axios.get("http://localhost:4001/all-scooters", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = response.data;
        const newArray = data.filter((obj) => obj.city === city);
        setScootersData(newArray);

        if (response.status !== 200) {
          throw new Error(`Request response was not ok (${response.status})`);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
    [setScootersData]
  );

  const reserveScooter = useCallback(async (isReserved, scooterId) => {
    console.log(scooterId, isReserved);
    try {
      const response = await axios.patch(`/api/edit-scooter/${scooterId}`, {
        isFree: isReserved,
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  return (
    <AppContext.Provider value={{ scootersData }}>
      <AppUpdateContext.Provider value={{ seeAllScooters, reserveScooter }}>
        {props.children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
}
