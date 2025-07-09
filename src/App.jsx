import { useState } from "react";
import "./App.css";

function App() {
  const [currentDog, setCurrentDog] = useState(null);
  const [banList, setBanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch random dog image data
  const fetchRandomDog = async () => {
    setLoading(true);
    setError(null);

    try {
      let attempts = 0;
      let dogData = null;

      // Keep trying until we get a dog that's not banned
      while (attempts < 20 && !dogData) {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!response.ok) {
          throw new Error("Failed to fetch dog data");
        }
        const data = await response.json();

        // Extract breed information from the image URL
        const urlParts = data.message.split("/");
        const breedIndex = urlParts.findIndex((part) => part === "breeds") + 1;
        const breedInfo = urlParts[breedIndex];

        let breed = "Unknown";
        let subBreed = null;

        if (breedInfo) {
          const breedParts = breedInfo.split("-");
          breed =
            breedParts[0].charAt(0).toUpperCase() + breedParts[0].slice(1);
          if (breedParts.length > 1) {
            subBreed =
              breedParts[1].charAt(0).toUpperCase() + breedParts[1].slice(1);
          }
        }

        // Check if this dog's attributes are banned
        const isBanned = banList.some(
          (bannedItem) =>
            bannedItem.toLowerCase() === breed.toLowerCase() ||
            (subBreed && bannedItem.toLowerCase() === subBreed.toLowerCase())
        );

        if (!isBanned) {
          dogData = {
            image: data.message,
            breed: breed,
            subBreed: subBreed,
            status: data.status,
          };
        }

        attempts++;
      }

      if (dogData) {
        setCurrentDog(dogData);
      } else {
        setError(
          "Could not find a dog that matches your criteria. Try removing some items from the ban list."
        );
      }
    } catch (err) {
      setError("Failed to fetch dog data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to add an attribute to the ban list
  const addToBanList = (attribute) => {
    if (attribute && !banList.includes(attribute)) {
      setBanList([...banList, attribute]);
    }
  };

  // Function to remove an attribute from the ban list
  const removeFromBanList = (attribute) => {
    setBanList(banList.filter((item) => item !== attribute));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐕 Veni Vici - Dog Discovery!</h1>
        <p>
          Discover amazing dogs from around the world. Click on attributes to
          ban them from future results!
        </p>
      </header>

      <main className="app-main">
        <div className="controls">
          <button
            onClick={fetchRandomDog}
            disabled={loading}
            className="discover-btn"
          >
            {loading ? "Loading..." : "🎲 Discover New Dog!"}
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        {currentDog && (
          <div className="dog-card">
            <div className="dog-image">
              <img src={currentDog.image} alt={`${currentDog.breed} dog`} />
            </div>

            <div className="dog-info">
              <h2>Dog Attributes</h2>
              <div className="attributes">
                <div
                  className="attribute clickable"
                  onClick={() => addToBanList(currentDog.breed)}
                >
                  <span className="attribute-label">Breed:</span>
                  <span className="attribute-value">{currentDog.breed}</span>
                </div>

                {currentDog.subBreed && (
                  <div
                    className="attribute clickable"
                    onClick={() => addToBanList(currentDog.subBreed)}
                  >
                    <span className="attribute-label">Sub-breed:</span>
                    <span className="attribute-value">
                      {currentDog.subBreed}
                    </span>
                  </div>
                )}

                <div className="attribute">
                  <span className="attribute-label">Status:</span>
                  <span className="attribute-value">{currentDog.status}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {banList.length > 0 && (
          <div className="ban-list">
            <h2>🚫 Ban List</h2>
            <p>These attributes will be excluded from future results:</p>
            <div className="ban-items">
              {banList.map((item, index) => (
                <div
                  key={index}
                  className="ban-item"
                  onClick={() => removeFromBanList(item)}
                >
                  {item} ✕
                </div>
              ))}
            </div>
            <p className="ban-hint">
              Click on any banned item to remove it from the list
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
