import { useRef, useEffect } from 'react'
import videojs from "video.js";
import "video.js/dist/video-js.css";

export const VideoJS = ( props ) => {

  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { onReady } = props;
  const options = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://vod.api.24ur.si/vod/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwb3AiLCJjb250ZXh0Ijp7ImJhY2tlbmQiOjAsImRldmljZV9mYW1pbHkiOiJkZXNrdG9wIiwiZGV2aWNlX2lkIjoiIiwiZHJtX3Byb3RlY3RlZCI6MCwiZW5kX2NodW5rIjowLCJleHBpcmVzIjowLCJpc19sb2NhbF9jaXRpemVuIjpmYWxzZSwibWVkaWFfZmlsZW5hbWUiOiIwZjJkZGIyMmUzXzYyMzA4ODQzIiwibWVkaWFfZ2VvbG9jayI6IlNJIiwibWVkaWFfcHVibGlzaGVkX2Zyb20iOjE1NTg2NDg4MDAsIm1lZGlhX3B1Ymxpc2hlZF90byI6MTU5MTg4Mjg2MCwic2VjdGlvbl9pZCI6MzA1MDEsInNpdGVfaWQiOjMwMDA1LCJza2lwX2dlb2xvY2siOjEsInN0YXJ0X2NodW5rIjowLCJ2aXNpdG9yX2lkIjowLCJ2aXNpdG9yX2lwIjoiOTEuMjAyLjY1LjgifSwiZXhwIjo2Mjc5MjAxODI3LCJpYXQiOjE1NjgyNzQ3NjMsImlzcyI6InBvcCJ9.vSygwxncPlDA0deD_TtNisUaAXWSkyEH0zrTJnWaOJ0/0f2ddb22e3_62308843/desktop/index.m3u8',
      type: 'application/x-mpegURL'
    }]
  }


  useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

export default VideoJS;