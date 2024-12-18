import React, { useEffect, useState } from "react";
import { getCarExtras } from "./Services/CarExtraService"; // Import the CarExtraService
import "./CarExtraList.css"; // Add styling for the car extras list

const CarExtraList = () => {
  const [carExtras, setCarExtras] = useState([]);

  // Fetch car extras on component mount
  useEffect(() => {
    const fetchCarExtras = async () => {
      try {
        const data = await getCarExtras(); // Fetch car extras from the service
        setCarExtras(data); // Set the car extras to state
      } catch (error) {
        console.error("Failed to fetch car extras:", error);
      }
    };

    fetchCarExtras(); // Call the fetch function when the component mounts
  }, []);

  return (
    <div className="car-extra-list">
      {carExtras.length > 0 ? (
        carExtras.map((carExtra) => (
          <div className="car-extra-card" key={carExtra.extraId}>
            <h2>{carExtra.name}</h2>
            <p>{carExtra.description}</p>
            <p>Price: ${carExtra.price}</p>
            <button>Add to Reservation</button> {/* Example button for interaction */}
          </div>
        ))
      ) : (
        <p>No car extras available at the moment.</p>
      )}
    </div>
  );
};

export default CarExtraList;
