import React, { useContext, useCallback, useState, useEffect } from "react";
import axios from "axios";

const AdminContext = React.createContext();

const AdminUpdateContext = React.createContext();

export function useAdminContext() {
  return useContext(AdminContext);
}

export function useAdminUpdateContext() {
  return useContext(AdminUpdateContext);
}

export function AdminProvider(props) {
  const [scootersData, setScootersData] = useState([]);

  const addNewScooter = useCallback(async (newScooter) => {
    try {
      const response = await axios.post(
        "http://localhost:4001/add-scooter",
        { newScooter },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error(`Request response was not ok (${response.status})`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  const seeAllScooters = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:4001/all-scooters", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      setScootersData(data);

      if (response.status !== 200) {
        throw new Error(`Request response was not ok (${response.status})`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [setScootersData]);

  const deleteScooter = useCallback(async (scooterId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4001/delete-scooter/${scooterId}`
      );

      if (response.status !== 200) {
        throw new Error(`Request response was not ok (${response.status})`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });

  useEffect(() => {
    seeAllScooters();
  }, []);

  return (
    <AdminContext.Provider value={{ scootersData }}>
      <AdminUpdateContext.Provider
        value={{ seeAllScooters, addNewScooter, deleteScooter }}
      >
        {props.children}
      </AdminUpdateContext.Provider>
    </AdminContext.Provider>
  );
}
