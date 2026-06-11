"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";

const CompanyVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime = (parseFloat(e.target.value) / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(parseFloat(e.target.value));
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <div 
      className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onTimeUpdate={handleProgress}
        onEnded={() => setIsPlaying(false)}
        playsInline
        muted={isMuted}
        poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1280&q=80&fit=crop"
      >
        <source src="/arqayaa_film.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay: Branding & Play Button */}
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 z-10 transition-opacity duration-500">
           <div className="mb-4 md:mb-6 flex flex-col items-center">
            <p className="font-rajdhani font-bold text-[10px] tracking-[0.3em] text-gold uppercase">DPULSEAI</p>
            <div className="w-12 h-[1px] bg-gold/50 mt-2" />
           </div>
           
           <button 
             onClick={togglePlay}
             className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:border-gold transition-all duration-300 group/play"
           >
             <Play fill="currentColor" size={32} className="ml-1 group-hover:scale-110 transition-transform" />
           </button>
           
           <p className="mt-8 font-serif text-white text-xl md:text-2xl tracking-wide">Watch the Film</p>
        </div>
      )}

      {/* Custom Controls */}
      <div className={`absolute bottom-0 left-0 w-full p-4 md:p-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 z-20 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-1 mb-6 bg-white/20 rounded-lg appearance-none cursor-pointer accent-gold"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button onClick={togglePlay} className="text-white hover:text-gold transition-colors">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <div className="flex items-center gap-3 group/volume">
              <button onClick={toggleMute} className="text-white hover:text-gold transition-colors">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>
            
            <span className="font-sans text-[12px] text-white/70 hidden sm:block">
              {videoRef.current ? Math.floor(videoRef.current.currentTime / 60) + ":" + ("0" + Math.floor(videoRef.current.currentTime % 60)).slice(-2) : "0:00"} 
              {" / "} 
              {videoRef.current ? Math.floor(videoRef.current.duration / 60) + ":" + ("0" + Math.floor(videoRef.current.duration % 60)).slice(-2) : "0:00"}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => videoRef.current && (videoRef.current.currentTime = 0)} className="text-white hover:text-gold transition-colors">
              <RotateCcw size={18} />
            </button>
            <button onClick={toggleFullscreen} className="text-white hover:text-gold transition-colors">
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Branding Wordmark (Bottom Right when playing) */}
      <div className={`absolute top-8 right-8 transition-opacity duration-500 z-10 ${isPlaying && !showControls ? 'opacity-30' : 'opacity-0'}`}>
         <div className="flex flex-col items-end">
            <div className="mb-4 md:mb-6 font-serif font-bold text-3xl md:text-4xl text-white tracking-tight">Dpulseai</div>
            <div className="w-8 h-1 bg-gold" />
         </div>
      </div>
    </div>
  );
};

export default CompanyVideo;
