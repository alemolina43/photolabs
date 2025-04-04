import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  topics,
  photos,
  toggleFavorite,
  isFavPhotoExist,
  toggleDisplay,
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={isFavPhotoExist} />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        toggleDisplay={toggleDisplay}
      />
    </div>
  );
};

export default HomeRoute;
