"use client";

import { Music } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Stop playback if the component unmounts.
  useEffect(() => {
    return () => audioRef.current?.pause();
  }, []);

  const togglePlay = useCallback(() => {
    let audio = audioRef.current;

    // Create the audio element on first click so the track is only
    // downloaded for visitors who actually want to listen.
    if (!audio) {
      audio = new Audio("/dreams.mp3");
      audio.loop = true;
      audio.volume = 0.2;
      audio.addEventListener("error", () => setIsPlaying(false));
      audioRef.current = audio;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <button
      onClick={togglePlay}
      className={`music-fab ${isPlaying ? "music-fab--playing" : ""}`}
      aria-label={
        isPlaying ? "Pause background music" : "Play background music"
      }
      id="music-fab"
    >
      {/* Sound wave bars — visible when playing */}
      <div className={`music-waves ${isPlaying ? "music-waves--active" : ""}`}>
        <span className="music-wave-bar" style={{ animationDelay: "0s" }} />
        <span className="music-wave-bar" style={{ animationDelay: "0.15s" }} />
        <span className="music-wave-bar" style={{ animationDelay: "0.3s" }} />
        <span className="music-wave-bar" style={{ animationDelay: "0.1s" }} />
        <span className="music-wave-bar" style={{ animationDelay: "0.25s" }} />
      </div>

      {/* Music icon — visible when idle */}
      <div className={`music-icon ${isPlaying ? "music-icon--hidden" : ""}`}>
        <Music size={22} />
      </div>

      {/* Ripple rings when playing */}
      {isPlaying && (
        <>
          <span className="music-ripple music-ripple--1" />
          <span className="music-ripple music-ripple--2" />
          <span className="music-ripple music-ripple--3" />
        </>
      )}
    </button>
  );
}
