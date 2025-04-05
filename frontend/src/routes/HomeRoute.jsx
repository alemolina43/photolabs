import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  updateToFavPhotoIds,
  isFavPhotoExist,
  openModal,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        updateToFavPhotoIds={updateToFavPhotoIds}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
