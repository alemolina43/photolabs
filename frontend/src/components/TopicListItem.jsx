import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, selectTopic }) => {
  const { title, id } = topic;

  const handleTopicClick = () => {
    selectTopic(id);
  };
  return (
    <>
      <div className="topic-list__item">
        <span onClick={handleTopicClick}>{title}</span>
      </div>
    </>
  );
};

export default TopicListItem;
