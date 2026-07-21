"use client";

import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, Square, Volume2 } from 'lucide-react';

interface TextToSpeechProps {
  text: string;
}

export default function TextToSpeech({ text }: TextToSpeechProps) {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Try to find a Turkish voice
        const turkishVoice = voices.find(v => v.lang === 'tr-TR' || v.lang.includes('tr'));
        if (turkishVoice) {
          setVoice(turkishVoice);
        } else {
          // Fallback to default
          setVoice(voices[0]);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;

      // Cleanup on unmount
      return () => {
        window.speechSynthesis.cancel();
      };
    }
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }, []);

  // Stop if text changes (e.g. user switched tabs)
  useEffect(() => {
    stop();
  }, [text, stop]);

  const play = () => {
    if (!isSupported) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel(); // Clear any ongoing speech

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) {
      utterance.voice = voice;
    }
    utterance.lang = 'tr-TR';
    utterance.rate = 0.9; // Slightly slower for better comprehension of dreams
    utterance.pitch = 1;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      console.error("Speech synthesis error", e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  return (
    <div className="flex items-center gap-3 bg-night-800/80 border border-night-700 p-2 px-4 rounded-xl shadow-lg w-fit mb-4">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-mystic-900/50 text-mystic-400">
        <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-pulse text-mystic-300' : ''}`} />
      </div>
      
      <div className="text-sm font-medium text-night-200 mr-2">
        {isPlaying ? 'Okunuyor...' : isPaused ? 'Duraklatıldı' : 'Sesli Dinle'}
      </div>

      <div className="flex items-center gap-2 border-l border-night-700 pl-3">
        {!isPlaying ? (
          <button
            onClick={play}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-mystic-600 hover:bg-mystic-500 text-white transition-colors"
            title="Oynat"
          >
            <Play className="w-4 h-4 ml-0.5" />
          </button>
        ) : (
          <button
            onClick={pause}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 hover:bg-amber-500 text-white transition-colors"
            title="Duraklat"
          >
            <Pause className="w-4 h-4" />
          </button>
        )}
        
        {(isPlaying || isPaused) && (
          <button
            onClick={stop}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-night-700 hover:bg-night-600 text-night-200 transition-colors"
            title="Durdur"
          >
            <Square className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
