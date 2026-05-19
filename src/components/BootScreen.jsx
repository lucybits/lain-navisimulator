import { useEffect, useRef, useState } from "react";
import "./BootScreen.css";

export default function BootScreen({ onFinish }) {
  const videoRef = useRef(null);
  const [playCount, setPlayCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play();

      video.onloadedmetadata = () => {
        const totalDuration = video.duration * 2;
        const intervalTime = 100;
        const increment = 100 / ((totalDuration * 1000) / intervalTime);

        intervalRef.current = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(intervalRef.current);
              return 100;
            }
            return prev + increment;
          });
        }, intervalTime);
      };

      video.onended = () => {
        setPlayCount((prev) => {
          if (prev >= 1) {
            onFinish();
            return prev;
          }
          video.play();
          return prev + 1;
        });
      };
    }

    return () => clearInterval(intervalRef.current);
  }, [onFinish]);

  return (
    <div className="boot-video-container">
      <video
        ref={videoRef}
        src="/background.mp4"
        className="boot-video"
        muted
        autoPlay
      />
      <div className="boot-overlay">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="progress-text">{progress.toFixed(0)}%</div>
      </div>
      <div className="info-box">
        <div className="info-content">
          <p>Created by LucyBits</p>
          <div className="info-section">
            <div className="info-links">
              <a href="https://github.com/lucybits" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.buymeacoffee.com/lucybits" target="_blank" rel="noopener noreferrer">Buy me a coffee</a>
              <a href="https://ko-fi.com/lucybits" target="_blank" rel="noopener noreferrer">Donate</a>
            </div>
            <div className="info-description">
              <p>
                Thank you for using Navi Simulator. This is a fan-made project, not official.
                Developed and hosted on GitHub for now. If you like it, feel free to leave a star.
                All rights belong to Pioneer LDC, Inc. Found a bug? Report it here. To avoid some errors, please keep it in place while this pod loads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
