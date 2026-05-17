"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyVideoProps {
  previewMode?: boolean;
}

const CompanyVideo: React.FC<CompanyVideoProps> = ({ previewMode = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(90); // Default 90s fallback
  const [currentScene, setCurrentScene] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Scene Detection
  useEffect(() => {
    if (currentTime >= 0 && currentTime < 12) setCurrentScene(1);
    else if (currentTime >= 12 && currentTime < 25) setCurrentScene(2);
    else if (currentTime >= 25 && currentTime < 38) setCurrentScene(3);
    else if (currentTime >= 38 && currentTime < 50) setCurrentScene(4);
    else if (currentTime >= 50 && currentTime < 70) setCurrentScene(5);
    else if (currentTime >= 70) setCurrentScene(6);
  }, [currentTime]);

  // Audio & Timer Sync
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 90);
    };

    const handleError = () => {
      console.warn("Audio file arqayaa_voiceover.mp3 not found. Using manual timer fallback.");
      setAudioError(true);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  // Manual Timer Fallback (if audio missing or error)
  useEffect(() => {
    if (isPlaying && audioError) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 90) {
            setIsPlaying(false);
            return 90;
          }
          return prev + 0.1;
        });
      }, 100);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, audioError]);

  const togglePlay = () => {
    if (previewMode) return;
    
    const audio = audioRef.current;
    if (isPlaying) {
      if (audio && !audioError) audio.pause();
      setIsPlaying(false);
    } else {
      if (audio && !audioError) {
        audio.play().catch(() => {
          setAudioError(true);
        });
      }
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  // Particles for Scene 1
  const particles = useMemo(() => {
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
    }));
  }, []);

  if (previewMode) {
    return (
      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-gold/30 group cursor-pointer shadow-2xl bg-black">
        <div className="absolute inset-0 bg-[#000000] flex items-center justify-center">
          <div className="absolute inset-0 bg-radial-gradient from-gold/10 to-transparent opacity-50" />
          <div className="text-center z-10">
            <h3 className="font-serif font-bold text-3xl md:text-4xl text-white mb-2">ARQAYAA</h3>
            <p className="font-rajdhani font-bold text-[10px] tracking-[0.3em] text-gold uppercase">INTELLIGENCE</p>
          </div>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          <div className="w-20 h-20 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 z-20">
            <Play fill="currentColor" className="ml-1" size={32} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={cn(
        "relative aspect-video w-full bg-[#060608] overflow-hidden group shadow-2xl",
        isFullscreen ? "h-screen aspect-auto" : "rounded-2xl"
      )}
    >
      <audio ref={audioRef} src="/arqayaa_voiceover.mp3" preload="metadata" muted={isMuted} />

      {/* SCENES */}
      <AnimatePresence mode="wait">
        {/* Scene 1: The Problem */}
        {currentScene === 1 && (
          <motion.div 
            key="scene1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center p-12"
          >
            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-20"
                  initial={{ x: p.left, y: p.top }}
                  animate={{ 
                    y: ["-10%", "110%"],
                    opacity: [0, 0.2, 0]
                  }}
                  transition={{ 
                    duration: p.duration, 
                    repeat: Infinity, 
                    delay: p.delay,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 space-y-6">
              {currentTime >= 0 && (
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif font-light text-2xl md:text-[42px] text-white"
                >
                  Industries generate more data than ever before.
                </motion.h2>
              )}
              {currentTime >= 3 && (
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif font-light text-2xl md:text-[42px] text-white"
                >
                  But most AI promises—
                </motion.h2>
              )}
              {currentTime >= 5.5 && (
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-serif font-bold italic text-3xl md:text-[48px] text-gold"
                >
                  fail in production.
                </motion.h2>
              )}
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
          </motion.div>
        )}

        {/* Scene 2: The Company */}
        {currentScene === 2 && (
          <motion.div 
            key="scene2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <motion.div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920)" }}
              animate={{ scale: [1, 1.08] }}
              transition={{ duration: 13, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-black/72" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10">
              {currentTime >= 12 && (
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-rajdhani font-semibold text-[13px] tracking-[0.3em] text-gold uppercase mb-6"
                >
                  ARQAYAA INTELLIGENCE PVT LTD
                </motion.span>
              )}
              {currentTime >= 13 && (
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif font-light text-3xl md:text-[52px] text-white mb-4"
                >
                  Building the AI systems that actually work.
                </motion.h2>
              )}
              {currentTime >= 15.5 && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-sans text-lg md:text-[20px] text-white/75"
                >
                  For industries. For society. For India.
                </motion.p>
              )}
              {currentTime >= 18 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-24 font-serif font-bold text-3xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                >
                  ARQAYAA
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Scene 3: TENETX */}
        {currentScene === 3 && (
          <motion.div 
            key="scene3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1920)" }}
            />
            <div className="absolute inset-0 bg-[#0E3D6E]/65" />
            
            <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-24 z-10">
              <motion.h2 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-bebas text-7xl md:text-[96px] text-white leading-none"
              >
                TENETX
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="h-[2px] bg-tenetx-primary my-8"
              />
              
              <div className="space-y-6">
                {[
                  { time: 26, val: "< 0.5%", label: "Error Rate" },
                  { time: 27.5, val: "₹ 0.08", label: "Per Query" },
                  { time: 29, val: "100%", label: "Data Sovereignty" },
                ].map((s, idx) => (
                  currentTime >= s.time && (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-baseline gap-4"
                    >
                      <span className="font-serif font-light text-4xl md:text-[60px] text-white">{s.val}</span>
                      <span className="font-rajdhani text-[14px] text-gold uppercase tracking-wider">{s.label}</span>
                    </motion.div>
                  )
                ))}
              </div>
              
              {currentTime >= 31 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-12 font-rajdhani font-semibold text-sm md:text-[14px] text-gold tracking-widest uppercase"
                >
                  Physics-Native AI for Oil & Gas
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Scene 4: TEXFLOW */}
        {currentScene === 4 && (
          <motion.div 
            key="scene4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1920)" }}
            />
            <div className="absolute inset-0 bg-[#0F5249]/60" />
            
            <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-12 md:px-24 z-10">
              <motion.h2 
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-rajdhani font-bold text-6xl md:text-[88px] text-white leading-none"
              >
                TEXFLOW
              </motion.h2>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                className="h-[2px] bg-texflow-primary my-8"
              />
              
              <div className="space-y-4">
                {[
                  { time: 39.5, text: "Word → Publisher-Ready PDF" },
                  { time: 41, text: "Zero AI. Zero Hallucinations." },
                  { time: 42.5, text: "IEEE · Springer · Elsevier" },
                ].map((line, idx) => (
                  currentTime >= line.time && (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="font-serif text-xl md:text-2xl text-white"
                    >
                      {line.text}
                    </motion.div>
                  )
                ))}
              </div>
              
              {currentTime >= 44 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-12 font-rajdhani font-semibold text-sm md:text-[14px] text-gold tracking-widest uppercase"
                >
                  Research Platform for India's Scholars
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Scene 5: The Vision */}
        {currentScene === 5 && (
          <motion.div 
            key="scene5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <motion.div 
              className="absolute inset-0 bg-cover"
              style={{ 
                backgroundImage: "url(https://images.unsplash.com/photo-1449156001931-82834b26e3bc?auto=format&fit=crop&q=80&w=1920)",
                backgroundPosition: "50% 60%"
              }}
              animate={{ backgroundPosition: "50% 50%" }}
              transition={{ duration: 20, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-black/50" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 z-10 space-y-8">
              {currentTime >= 50 && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif italic text-2xl md:text-[38px] text-white"
                >
                  "From oil rigs to research desks."
                </motion.p>
              )}
              {currentTime >= 53 && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif italic text-2xl md:text-[38px] text-white"
                >
                  "From industrial operations to academic labs."
                </motion.p>
              )}
              {currentTime >= 57 && (
                <motion.h2 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-serif font-semibold text-3xl md:text-[44px] text-gold max-w-4xl"
                >
                  ARQAYAA builds systems that solve real problems
                </motion.h2>
              )}
              {currentTime >= 61 && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif italic text-3xl md:text-[44px] text-white"
                >
                  for real people.
                </motion.p>
              )}
            </div>
          </motion.div>
        )}

        {/* Scene 6: The Close */}
        {currentScene === 6 && (
          <motion.div 
            key="scene6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-black flex flex-col items-center justify-center text-center p-12"
          >
            {/* Center Glow */}
            <motion.div 
              className="absolute w-96 h-96 bg-gold/10 rounded-full blur-[100px]"
              animate={{ opacity: [0.08, 0.18, 0.08] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10 flex flex-col items-center">
              {currentTime >= 70 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="font-serif font-light text-3xl md:text-[52px] text-white/60 mb-2"
                >
                  The future of AI
                </motion.div>
              )}
              {currentTime >= 74 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-serif font-light text-3xl md:text-[52px] text-white/60 mb-8"
                >
                  is not about models.
                </motion.div>
              )}
              {currentTime >= 77 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif font-bold text-4xl md:text-[60px] text-white mb-12"
                >
                  It is about systems.
                </motion.div>
              )}
              
              <div className="flex gap-8 mb-16">
                {currentTime >= 80 && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-serif text-3xl md:text-[40px] text-gold">Reliable.</motion.span>
                )}
                {currentTime >= 80.5 && (
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-serif text-3xl md:text-[40px] text-gold">Scalable.</motion.span>
                )}
                {currentTime >= 81 && (
                  <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="font-serif font-bold text-3xl md:text-[48px] text-white">Real.</motion.span>
                )}
              </div>
              
              {currentTime >= 85 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                  <div className="font-serif font-bold text-4xl md:text-[56px] text-white">ARQAYAA INTELLIGENCE</div>
                  <div className="font-rajdhani font-semibold text-[16px] tracking-[0.3em] text-gold uppercase">Intelligence Pvt Ltd</div>
                </motion.div>
              )}
              
              {currentTime >= 87 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="mt-8 font-sans text-lg text-white/50 border-b border-gold/30 pb-1 px-4"
                >
                  arqaya.com
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY BEFORE START */}
      {(!isPlaying && currentTime === 0) && (
        <div className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer group/overlay" onClick={togglePlay}>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1920)" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative text-center flex flex-col items-center">
            <div className="mb-6 font-serif font-bold text-4xl text-white tracking-tight">ARQAYAA</div>
            <div className="mb-10 font-rajdhani font-bold text-sm tracking-[0.3em] text-gold uppercase">Play Company Film</div>
            <div className="w-20 h-20 rounded-full border-2 border-gold flex items-center justify-center text-gold group-hover/overlay:bg-gold group-hover/overlay:text-white transition-all duration-300">
               <Play fill="currentColor" className="ml-1" size={32} />
            </div>
          </div>
        </div>
      )}

      {/* CONTROLS */}
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-[60]">
        <div className="flex flex-col gap-4">
          {/* Progress Bar */}
          <div className="relative w-full h-1 bg-white/20 cursor-pointer rounded-full overflow-hidden" onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            if (audioRef.current && !audioError) audioRef.current.currentTime = pos * duration;
            setCurrentTime(pos * duration);
          }}>
            <motion.div 
              className="absolute left-0 top-0 h-full bg-gold"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={togglePlay} className="text-white hover:text-gold transition-colors">
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>
              <button onClick={() => setIsMuted(!isMuted)} className="text-white hover:text-gold transition-colors">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <span className="font-rajdhani text-[12px] text-white/80 tabular-nums">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
              {audioError && <span className="text-[10px] text-gold/70 font-sans uppercase tracking-widest ml-2">Visual-Only Mode</span>}
            </div>
            
            <div className="flex items-center gap-4">
              <button onClick={() => {
                if (audioRef.current) audioRef.current.currentTime = 0;
                setCurrentTime(0);
                if (!isPlaying) setIsPlaying(true);
              }} className="text-white/60 hover:text-white transition-colors">
                <RotateCcw size={16} />
              </button>
              <button onClick={toggleFullscreen} className="text-white hover:text-gold transition-colors">
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
