import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  toggleFavorite,
  isFavPhotoExist,
  openModal,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
