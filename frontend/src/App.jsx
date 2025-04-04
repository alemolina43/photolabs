import { useState } from "react";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritePhotos, setFavoritePhotos] = useState([]);

  const toggleFavorite = (photoId) => {
    if (favoritePhotos.includes(photoId)) {
      const updatedFavorites = favoritePhotos.filter((id) => id !== photoId);
      setFavoritePhotos(updatedFavorites);
    } else {
      const updatedFavorites = [...favoritePhotos, photoId];
      setFavoritePhotos(updatedFavorites);
    }
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default App;
