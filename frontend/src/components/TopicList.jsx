import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics";

const TopicList = () => {
  const parsedTopics = topics.map((topic) => (
    <TopicListItem key={topic.id} topic={topic} />
  ));

  return <div className="top-nav-bar__topic-list">{parsedTopics}</div>;
};

export default TopicList;
