// pages/index.js
import Head from 'next/head';
import VideoCard from '../components/VideoCard';
import { getAllVideos } from '../lib/videos';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';

//

export default function Home({ videos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>YouTube Clone</title>
        <meta name="description" content="A simple YouTube clone built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.videoGrid}>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const videos = getAllVideos();

  return {
    props: {
      videos,
    },
  };
}