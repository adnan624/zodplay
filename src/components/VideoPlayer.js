// components/VideoPlayer.js
import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = ({ video }) => {
  if (!video) return <div>Video not found</div>;

  return (
    <div className={styles.videoPlayer}>
      <div className={styles.videoWrapper}>
        <img 
          src={video.videoUrl} 
          alt={video.title}
          className={styles.video}
        />
      </div>
      <h1 className={styles.videoTitle}>{video.title}</h1>
      
      <div className={styles.videoMeta}>
        <div className={styles.channelInfo}>
          <div className={styles.channelName}>
            <h2>{video.channel}</h2>
            <p>{video.subscribers}</p>
          </div>
          <button className={styles.subscribeBtn}>Subscribe</button>
        </div>
        <div className={styles.actionButtons}>
          <button>👍 {video.likes}</button>
          <button>👎</button>
          <button>Share</button>
          <button>Save</button>
        </div>
      </div>
      
      <div className={styles.description}>
        <p>{video.views} • {video.uploadTime}</p>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;