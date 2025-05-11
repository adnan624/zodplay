// pages/video/[id].js
import Head from 'next/head';
import { useRouter } from 'next/router';

import VideoPlayer from '../../components/VideoPlayer';
import Sidebar from '../../components/Sidebar';
import { getVideoById, getRecommendedVideos } from '../../lib/videos';
import styles from '../../styles/Video.module.css';
import Header from '../../components/Header';


export default function VideoPage({ video, recommendedVideos }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{video?.title} - VidTube</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <VideoPlayer video={video} />
        <Sidebar recommendedVideos={recommendedVideos} />
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      // Pre-render only these IDs at build time
    ],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const video = getVideoById(params.id);
  const recommendedVideos = getRecommendedVideos(params.id);

  if (!video) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      video,
      recommendedVideos,
    },
  };
}
