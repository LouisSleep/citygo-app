import React from "react";
import { useRef, useState } from "react";
import style from "./VideoLayout.module.css";
import video from "../../Assets/videos/citygo-presentation-video-layout.mp4";
import play from "../../Assets/svg/icon/play.svg";
import pause from "../../Assets/svg/icon/pause.svg";

export default function VideoLayout() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [played, setPlayed] = useState(play);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play();
      setPlayed(pause);
    } else if (video) {
      video.pause();
      setPlayed(play);
    }
  };

  return (
    <div className={style.videoCard}>
      <div className={style.videoText}>
        <span className={style.mainTitle}>The Breath of Travel</span>
        <span className={style.subTitle}>
          Breathe the Adventure, Share the Wonder
        </span>
      </div>
      <div className={style.videoContent}>
        <video className={style.video} loop ref={videoRef}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={style.videoControllers}>
          <button onClick={handlePlayPause}>
            <img src={played} alt="playercontroller" />
          </button>
        </div>
      </div>
    </div>
  );
}
