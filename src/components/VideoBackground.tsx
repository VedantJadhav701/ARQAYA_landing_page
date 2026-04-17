"use client";

import React, { useRef, useEffect } from "react";

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Subtle slowing for more cinematic feel
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Fallback Black Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Video Element */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale-[0.5]"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Deep Matte Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80" />
      
      {/* Matte Black Layer to prevent mismatching colors */}
      <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
    </div>
  );
};

export default VideoBackground;
