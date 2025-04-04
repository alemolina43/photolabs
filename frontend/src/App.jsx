import { useState } from "react";
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

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

  const isFavPhotoExist = favoritePhotos.length > 0; //if array.length is bigger than 0

  const [displayModal, setDisplayModal] = useState(false);

  const toggleDisplay = () => {
    setDisplayModal((prevSelected) => !prevSelected);
  };

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        toggleFavorite={toggleFavorite}
        isFavPhotoExist={isFavPhotoExist}
        toggleDisplay={toggleDisplay}
      />
      {displayModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
