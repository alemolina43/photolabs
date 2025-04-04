import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ topics, photos, toggleFavorite }) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
