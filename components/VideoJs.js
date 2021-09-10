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
      src: 'https://vod.api.24ur.si/vod/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwb3AiLCJjb250ZXh0Ijp7ImJhY2tlbmQiOjAsImRldmljZUZhbWlseSI6ImRlc2t0b3AiLCJkZXZpY2VJZCI6ImE2NjkwNmYzLTMwODQtNDE1OS05OWU3LTA4NDRmMDJhZDBlYSIsImRybVByb3RlY3RlZCI6MCwiZW5kQ2h1bmsiOjAsImlzTG9jYWxDaXRpemVuIjp0cnVlLCJtZWRpYUZpbGVuYW1lIjoiNDg0YTk5NzgzZl82MjYxMjQyMCIsIm1lZGlhR2VvbG9jayI6IlNJIiwibWVkaWFQdWJsaXNoZWRGcm9tIjoxNjMxMjU5NzU1LCJtZWRpYVB1Ymxpc2hlZFRvIjoxNjYyNzg4NTkwLCJwcm9maWxlSWQiOjAsInNlY3Rpb25JZCI6MCwic2l0ZUlkIjozMDAwNSwic2tpcEdlbyI6MSwic3RhcnRDaHVuayI6MCwidmlwIjpmYWxzZSwidmlzaXRvcklkIjowLCJ2aXNpdG9ySXAiOiI5MS4yMDIuNjUuMTEifSwiZXhwIjo3OTEwNDYxNjEwLCJpYXQiOjE2MzEyNTk4MTgsImlzcyI6InBvcCJ9.ltHVz8cU4L0rIQjATerUIsceS45ZAXVeUqYiK3CCMeY/484a99783f_62612420/desktop/index.m3u8',
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
    <div data-vjs-player className="">
      <video ref={videoRef} poster="https://images.24ur.com/media//images/original/Sep2021/12e3d4b423b125b88d69_62612472.jpg?v=1631263314" className="video-js vjs-big-play-centered my-12 md:my-20 px-4 md:px-0" />
    </div>
  );
}

export default VideoJS;