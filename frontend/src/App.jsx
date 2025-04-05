import topics from "./mocks/topics";
import photos from "./mocks/photos";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favoritePhotos,
    displayModal,
    isFavPhotoExist,
    selectedPhoto,
    updateToFavPhotoIds,
    openModal,
    closeModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFavPhotoExist={isFavPhotoExist}
        openModal={openModal}
      />
      {displayModal && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          favoritePhotos={favoritePhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
