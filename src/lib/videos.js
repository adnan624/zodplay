// lib/videos.js
import { videos, videoData } from '../data/mockVideos';

export const getAllVideos = () => {
  return videos;
};

export const getVideoById = (id) => {
  return videoData[id];
};

export const getRecommendedVideos = (currentVideoId) => {
  return videos.filter(video => video.id !== currentVideoId).slice(0, 5);
};