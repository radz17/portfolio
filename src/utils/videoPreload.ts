// Warms the browser's cache for a case study's hero video before the user clicks in,
// so playback can start immediately instead of showing a blank loading gap.
const prefetchedUrls = new Set<string>();

export const prefetchVideo = (src?: string) => {
  if (!src || prefetchedUrls.has(src)) return;
  prefetchedUrls.add(src);

  const video = document.createElement('video');
  video.preload = 'auto';
  video.muted = true;
  video.src = src;
  video.load();
};
