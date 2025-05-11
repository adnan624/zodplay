import Link from 'next/link';
import styles from '../styles/VideoCard.module.css';

const VideoCard = ({ video }) => {
  return (
    <Link href={`/video/${video.id}`} className={styles.cardLink}>
      <div className={styles.videoCard}>
        <div className={styles.thumbnailContainer}>
          <img 
            src={video.thumbnail || '/placeholder-thumbnail.jpg'} 
            alt={video.title}
            className={styles.thumbnail}
          />
          {video.duration && (
            <div className={styles.duration}>{video.duration}</div>
          )}
        </div>
        <div className={styles.videoInfo}>
          <div className={styles.headerRow}>
            {video.channelAvatar && (
              <div className={styles.avatarContainer}>
                <img 
                  src={video.channelAvatar} 
                  alt={video.channel}
                  className={styles.channelAvatar}
                />
              </div>
            )}
            <div className={styles.videoDetails}>
              <h3 className={styles.title}>{video.title}</h3>
              <p className={styles.channel}>{video.channel}</p>
              <div className={styles.metadata}>
                <span>{video.views}</span>
                <span className={styles.separator}>•</span>
                <span>{video.uploadTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;