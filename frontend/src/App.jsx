import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3).fill(sampleDataForPhotoListItem);
  const parsedPhotos = photos.map((photo) => (
    <PhotoListItem
      key={sampleDataForPhotoListItem.id}
      sampleDataForPhotoListItem={sampleDataForPhotoListItem}
    />
  ));

  return <div className="App">{parsedPhotos}</div>;
};

export default App;
