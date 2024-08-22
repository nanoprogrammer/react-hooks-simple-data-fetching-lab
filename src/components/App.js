import React, { useState, useEffect } from "react";

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
 
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching the dog image:", error);
        setLoading(false);
      
      });
      
  }, []);
  if(!loading) return <p>Loading....</p>;

  return (
    <div>{
        <img src={dogImage} alt="A Random Dog" />
      }
    </div>
  );
}

export default App;

