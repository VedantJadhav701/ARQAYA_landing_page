"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize, Volume2, VolumeX, RotateCcw, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyVideoProps {
  previewMode?: boolean;
}

const CompanyVideo: React.FC<CompanyVideoProps> = ({ previewMode = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync state with video element
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const handleWaiting = () => setIsLoading(true);
    const handlePlaying = () => {
      setIsLoading(false);
      setIsPlaying(true);
      setHasStarted(true);
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setHasStarted(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    // Initial check in case it loaded before listener attached
    if (video.readyState >= 2) {
      setDuration(video.duration);
      setIsLoading(false);
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (previewMode) return;
    
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      // Force user gesture context
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(err => {
          console.error("Playback failed:", err);
          // Fallback: try muted play if audio is the blocker
          video.muted = true;
          setIsMuted(true);
          video.play().then(() => {
             setHasStarted(true);
          });
        });
      }
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if ((containerRef.current as any).webkitRequestFullscreen) { /* Safari */
        (containerRef.current as any).webkitRequestFullscreen();
      } else if ((containerRef.current as any).msRequestFullscreen) { /* IE11 */
        (containerRef.current as any).msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (previewMode) {
    return (
      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gold/30 group cursor-pointer shadow-2xl bg-black">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          muted 
          playsInline 
          src="/arqayaa_film.mp4"
        />
        <div className="absolute inset-0 bg-[#000000]/40 flex items-center justify-center">
          <div className="text-center z-10 p-4">
            <h3 className="font-serif font-bold text-2xl md:text-4xl text-white mb-2 tracking-tight">OUR STORY</h3>
            <p className="font-rajdhani font-bold text-[10px] tracking-[0.3em] text-gold uppercase">ARQAYAA INTELLIGENCE</p>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 z-20">
            <Play fill="currentColor" className="ml-1" size={24} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative aspect-video w-full bg-black overflow-hidden group shadow-2xl touch-action-none",
        isFullscreen ? "h-screen aspect-auto" : "rounded-2xl"
      )}
      onClick={() => togglePlay()}
    >
      <video 
        ref={videoRef}
        src="/arqayaa_film.mp4"
        className="w-full h-full object-contain"
        playsInline
        webkit-playsinline="true"
        preload="auto"
        muted={isMuted}
      />

      {/* Loading Spinner */}
      {isLoading && hasStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-[65]">
           <Loader2 className="text-gold animate-spin" size={48} />
        </div>
      )}

      {/* OVERLAY BEFORE START */}
      {!hasStarted && (
        <div 
          className="absolute inset-0 z-[70] flex items-center justify-center cursor-pointer group/overlay bg-black/60 backdrop-blur-sm"
          onClick={(e) => togglePlay(e)}
        >
          <div className="relative text-center flex flex-col items-center p-6">
            <div className="mb-4 md:mb-6 font-serif font-bold text-3xl md:text-4xl text-white tracking-tight">ARQAYAA</div>
            <div className="mb-8 md:mb-10 font-rajdhani font-bold text-xs md:text-sm tracking-[0.3em] text-gold uppercase text-center">Watch Full Film</div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold group-hover/overlay:bg-gold group-hover/overlay:text-white transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)]">
               <Play fill="currentColor" className="ml-1" size={28} />
            </div>
          </div>
        </div>
      )}

      {/* CONTROLS */}
      <div 
        className={cn(
          "absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity z-[80]",
          "lg:opacity-0 lg:group-hover:opacity-100",
          (hasStarted) ? "opacity-100" : "opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-3 md:gap-4">
          {/* Progress Bar */}
          <div className="relative w-full h-1.5 bg-white/20 cursor-pointer rounded-full overflow-hidden" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            if (videoRef.current) videoRef.current.currentTime = pos * duration;
          }}>
            <motion.div className="absolute left-0 top-0 h-full bg-gold shadow-[0_0_10px_rgba(201,168,76,0.8)]" style={{ width: `${(currentTime / duration) * 100}%` }} />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={(e) => togglePlay(e)}
                className="text-white hover:text-gold transition-colors p-1"
              >
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
              </button>
              <button onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }} className="text-white hover:text-gold transition-colors p-1">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <span className="font-rajdhani text-[11px] md:text-[12px] text-white font-medium tabular-nums tracking-widest">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button onClick={(e) => { e.stopPropagation(); if (videoRef.current) videoRef.current.currentTime = 0; }} className="text-white/60 hover:text-white transition-colors p-1">
                <RotateCcw size={16} />
              </button>
              <button onClick={toggleFullscreen} className="text-white hover:text-gold transition-colors p-1">
                <Maximize size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyVideo;
