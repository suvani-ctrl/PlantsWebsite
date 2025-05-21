import React from "react";
import { useGlobalContext } from "./context";

const Services = () => {
  const { state } = useGlobalContext();
  const { plants, loading, error } = state;

  if (loading) {
    return <h2 style={{ color: "white", textAlign: "center" }}>Loading plants...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }

  return (
    <div style={{
      padding: "2rem",
      backgroundColor: "#0d1b2a",
      minHeight: "100vh",
      color: "#fff",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    }}>
   
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{
            backgroundColor: "#1b263b",
            borderRadius: "12px",
            padding: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "transform 0.3s",
          }}>
            <img
              src={plant.image}
              alt={plant.common_name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
            <h3 style={{ marginTop: "1rem", color: "#f0e9d2" }}>{plant.common_name}</h3>
            <p style={{ fontStyle: "italic", color: "#89c2d9" }}>{plant.scientific_name}</p>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "0.5rem", fontSize: "0.9rem" }}>
              <li><strong>Watering:</strong> {plant.watering}</li>
              <li><strong>Light:</strong> {plant.light}</li>
              <li><strong>Toxicity:</strong> {plant.toxicity}</li>
              <li><strong>Difficulty:</strong> {plant.difficulty}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services; 