import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  updateToFavPhotoIds,
  isFavPhotoExist,
  openModal,
  selectTopic,
  favoritePhotos,
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist}
        selectTopic={selectTopic}
      />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        openModal={openModal}
        favoritePhotos={favoritePhotos}
      />
    </div>
  );
};

export default HomeRoute;
