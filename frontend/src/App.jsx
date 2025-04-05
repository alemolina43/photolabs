import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, updateToFavPhotoIds, openModal, closeModal } =
    useApplicationData();

  const isFavPhotoExist = state.favoritePhotos.length > 0; //if array.length is bigger than 0

  return (
    <div className="App">
      <HomeRoute
        topics={state.topicData}
        photos={state.photoData}
        updateToFavPhotoIds={updateToFavPhotoIds}
        isFavPhotoExist={isFavPhotoExist}
        openModal={openModal}
      />
      {state.displayModal && (
        <PhotoDetailsModal
          selectedPhoto={state.selectedPhoto}
          favoritePhotos={state.favoritePhotos}
          updateToFavPhotoIds={updateToFavPhotoIds}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
