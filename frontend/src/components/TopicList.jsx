import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({ topics, toggleDisplay }) => {
  const parsedTopics = topics.map((topic) => (
    <TopicListItem key={topic.id} topic={topic} toggleDisplay={toggleDisplay} />
  ));

  return <div className="top-nav-bar__topic-list">{parsedTopics}</div>;
};

export default TopicList;
