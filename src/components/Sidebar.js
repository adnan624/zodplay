// components/Sidebar.js
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ recommendedVideos }) => {
  return (
    <div className={styles.sidebar}>
      <h3>Up next</h3>
      {recommendedVideos?.map((video) => (
        <div key={video.id} className={styles.recommendedVideo}>
          <img src={video.thumbnail} alt={video.title} />
          <div className={styles.info}>
            <h4>{video.title}</h4>
            <p>{video.channel}</p>
            <p>{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;