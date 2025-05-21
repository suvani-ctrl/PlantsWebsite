// src/context.jsx
import React, { createContext, useContext, useReducer, useEffect } from "react";
import plantsData from "./Data/PlantsData";

const AppContext = createContext();

const initialState = {
  plants: [],
  loading: true,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PLANTS_SUCCESS":
      return { ...state, plants: action.payload, loading: false };
    case "GET_PLANTS_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPlants = async () => {
    try {
      // Simulate async fetching
      setTimeout(() => {
        dispatch({ type: "GET_PLANTS_SUCCESS", payload: plantsData });
      }, 800);
    } catch (err) {
      dispatch({ type: "GET_PLANTS_ERROR", payload: "Failed to load plants" });
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

// 👇 Add this line if you're importing `AppContext` somewhere else
export { AppContext };
