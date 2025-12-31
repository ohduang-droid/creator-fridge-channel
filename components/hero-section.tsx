"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";

const OVERLAY_DURATION = 2000;
const HERO_INTRO_VIDEO = "https://amzn-s3-fc-bucket.s3.sa-east-1.amazonaws.com/videos/video-part1-1.mp4";
const HERO_MAIN_VIDEO = "https://amzn-s3-fc-bucket.s3.sa-east-1.amazonaws.com/videos/video-part3-1.mp4";
const HERO_OVERLAY_AUDIO = "https://amzn-s3-fc-bucket.s3.sa-east-1.amazonaws.com/videos/video-part2-1.m4a";

interface HeroSectionProps {
  videoSrc?: string | null;
  overlayImageSrc?: string | null;
  showHeroOverlayCta?: boolean;
  enableOverlayTransition?: boolean;
  scrollAfterFirstLoop?: boolean;
}

export const HeroSection = ({
  videoSrc,
  overlayImageSrc,
  showHeroOverlayCta = true,
  enableOverlayTransition = true,
  scrollAfterFirstLoop = false,
}: HeroSectionProps) => {
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const overlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [isOverlayPhase, setIsOverlayPhase] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const isMutedRef = useRef(true);
  const resolvedVideo = videoSrc ?? HERO_MAIN_VIDEO;
  const shouldUseOverlayTransition = enableOverlayTransition && Boolean(overlayImageSrc);
  const [activeVideo, setActiveVideo] = useState<"videoA" | "videoB">("videoA");
  const overlayAudioRef = useRef<HTMLAudioElement>(null);
  const afterHeroRef = useRef<HTMLDivElement | null>(null);
  const hasScrolledAfterFirstLoopRef = useRef(false);
  const videoSources = useMemo(
    () => ({
      videoA: HERO_INTRO_VIDEO,
      videoB: resolvedVideo,
    }),
    [resolvedVideo]
  );
  const scrollAfterFirstLoopRef = useRef(scrollAfterFirstLoop);

  const applyMuteToVideos = useCallback((nextMuted: boolean) => {
    [introVideoRef.current, mainVideoRef.current].forEach((video) => {
      if (!video) return;
      video.muted = nextMuted;
      video.defaultMuted = nextMuted;
    });
  }, []);

  const playVideoElement = useCallback((video: HTMLVideoElement, onReady?: () => void) => {
    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => { });
      }
      onReady?.();
    };

    video.currentTime = 0;
    video.muted = isMutedRef.current;
    video.defaultMuted = isMutedRef.current;

    if (video.readyState >= 2 && video.currentSrc) {
      attemptPlay();
    } else {
      const handleLoadedData = () => {
        video.removeEventListener("loadeddata", handleLoadedData);
        attemptPlay();
      };
      video.addEventListener("loadeddata", handleLoadedData);
      video.load();
    }
  }, []);

  const switchToVideo = useCallback(
    (next: "videoA" | "videoB") => {
      const targetRef = next === "videoA" ? introVideoRef : mainVideoRef;
      const otherRef = next === "videoA" ? mainVideoRef : introVideoRef;
      const target = targetRef.current;
      if (!target) return;

      if (otherRef.current) {
        otherRef.current.pause();
        otherRef.current.currentTime = 0;
      }

      playVideoElement(target, () => {
        setActiveVideo(next);
      });
    },
    [playVideoElement]
  );

  const clearOverlayTimer = useCallback(() => {
    if (overlayTimerRef.current) {
      clearTimeout(overlayTimerRef.current);
      overlayTimerRef.current = null;
    }
  }, []);

  const stopOverlayAudio = useCallback(() => {
    const audio = overlayAudioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  }, []);

  const playOverlayAudio = useCallback(() => {
    if (isMutedRef.current) return;
    const audio = overlayAudioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => { });
  }, []);

  const startOverlayPhase = useCallback(() => {
    clearOverlayTimer();
    if (!shouldUseOverlayTransition) {
      switchToVideo("videoB");
      return;
    }
    setIsOverlayPhase(true);
    playOverlayAudio();
    overlayTimerRef.current = setTimeout(() => {
      setIsOverlayPhase(false);
      stopOverlayAudio();
      switchToVideo("videoB");
    }, OVERLAY_DURATION);
  }, [clearOverlayTimer, shouldUseOverlayTransition, switchToVideo, playOverlayAudio, stopOverlayAudio]);

  useEffect(() => {
    return () => {
      clearOverlayTimer();
      stopOverlayAudio();
    };
  }, [clearOverlayTimer, stopOverlayAudio]);

  useEffect(() => {
    scrollAfterFirstLoopRef.current = scrollAfterFirstLoop;
    hasScrolledAfterFirstLoopRef.current = false;
  }, [scrollAfterFirstLoop, resolvedVideo]);

  useEffect(() => {
    const introVideo = introVideoRef.current;
    const mainVideo = mainVideoRef.current;
    if (!introVideo || !mainVideo) return;

    const handleIntroEnded = () => {
      startOverlayPhase();
    };

    const handleMainEnded = () => {
      clearOverlayTimer();
      setIsOverlayPhase(false);
      stopOverlayAudio();
      if (scrollAfterFirstLoopRef.current && !hasScrolledAfterFirstLoopRef.current) {
        hasScrolledAfterFirstLoopRef.current = true;
        const target = afterHeroRef.current;
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (typeof window !== "undefined") {
          window.scrollBy({ top: window.innerHeight * 0.25, behavior: "smooth" });
        }
      }
      switchToVideo("videoA");
    };

    introVideo.addEventListener("ended", handleIntroEnded);
    mainVideo.addEventListener("ended", handleMainEnded);
    return () => {
      introVideo.removeEventListener("ended", handleIntroEnded);
      mainVideo.removeEventListener("ended", handleMainEnded);
    };
  }, [startOverlayPhase, clearOverlayTimer, stopOverlayAudio, switchToVideo]);

  useEffect(() => {
    clearOverlayTimer();
    setIsOverlayPhase(false);
    stopOverlayAudio();
    switchToVideo("videoA");
  }, [resolvedVideo, clearOverlayTimer, switchToVideo, stopOverlayAudio]);

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    isMutedRef.current = nextMuted;
    applyMuteToVideos(nextMuted);

    if (!nextMuted) {
      const activeRef = activeVideo === "videoA" ? introVideoRef : mainVideoRef;
      activeRef.current?.play().catch(() => { });
      if (isOverlayPhase) {
        playOverlayAudio();
      }
    } else {
      stopOverlayAudio();
    }
  };

  const overlayVisible = shouldUseOverlayTransition && overlayImageSrc;
  useEffect(() => {
    const head = document.head;
    if (!head) return;

    const preloadMedia = (href: string, asType: "video" | "audio") => {
      if (!href) return;
      const existing = head.querySelector<HTMLLinkElement>(`link[rel="preload"][as="${asType}"][href="${href}"]`);
      if (existing) return;

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = asType;
      link.href = href;
      head.appendChild(link);
      return link;
    };

    const introLink = preloadMedia(HERO_INTRO_VIDEO, "video");
    const videoLink = preloadMedia(videoSources.videoB, "video");
    const audioLink = preloadMedia(HERO_OVERLAY_AUDIO, "audio");

    return () => {
      if (introLink) head.removeChild(introLink);
      if (videoLink) head.removeChild(videoLink);
      if (audioLink) head.removeChild(audioLink);
    };
  }, [videoSources.videoB]);

  return (
    <>
      <section id="home" className="relative bg-[#F7F7F4] pb-0">
        {/* Full-bleed video constrained to 16:9 */}
        <div className="relative w-full aspect-video overflow-hidden bg-black">
          <video
            ref={introVideoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${activeVideo === "videoA" ? "opacity-100" : "opacity-0"}`}
            src={videoSources.videoA}
            muted={isMuted}
            playsInline
            preload="auto"
          />
          <video
            ref={mainVideoRef}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${activeVideo === "videoB" ? "opacity-100" : "opacity-0"}`}
            src={videoSources.videoB}
            muted={isMuted}
            playsInline
            preload="auto"
          />
          {overlayVisible && (
            <div
              className="absolute inset-0 transition-opacity duration-500 ease-in-out"
              style={{ opacity: isOverlayPhase ? 1 : 0 }}
            >
              <div className={`absolute inset-0 ${isOverlayPhase ? "hero-overlay-pan" : ""}`}>
                <Image
                  src={overlayImageSrc}
                  alt="Hero overlay"
                  fill
                  className="object-cover"
                  priority
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 right-6 text-white font-semibold tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-lg">
                Channel Owned
              </div>
            </div>
          )}

          <audio ref={overlayAudioRef} src={HERO_OVERLAY_AUDIO} preload="auto" className="hidden" />

          <div className="absolute bottom-6 right-6 z-20">
            <button
              onClick={handleToggleMute}
              className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-foreground shadow-xl backdrop-blur transition hover:bg-white"
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-4 w-4" />
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {showHeroOverlayCta && (
            <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-12">
              <div className="pointer-events-auto">
                <Link href="#join-pilot">
                  <ShimmerButton
                    className="shadow-2xl transition-transform duration-300 hover:scale-110"
                    background="linear-gradient(120deg, #9f1026, #f25f6c)"
                    shimmerColor="#ffe5e9"
                  >
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                      Founder Chat → Launch Channel
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        className="relative z-10 px-6 py-8 text-center overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "648px" }}
        ref={afterHeroRef}
      >
        {/* Background image with blur effect */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/science-hero-bg.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(20px) brightness(1.05)',
            transform: 'scale(1.05)',
          }}
        />
        {/* Overlay gradient for natural transition from video to background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(to bottom, 
            #F7F7F4 0%,
            rgba(247, 247, 244, 0.98) 5%,
            rgba(247, 247, 244, 0.95) 10%,
            rgba(247, 247, 244, 0.9) 20%,
            rgba(247, 247, 244, 0.8) 35%,
            rgba(247, 247, 244, 0.6) 50%,
            rgba(247, 247, 244, 0.4) 65%,
            rgba(247, 247, 244, 0.2) 80%,
            rgba(247, 247, 244, 0.1) 90%,
            transparent 100%
          )`
          }}
        ></div>

        <div className="relative z-10 mx-auto max-w-5xl pb-8">
          <h1 className="text-center text-2xl md:text-5xl mt-2 text-white">
            Convert more subscribers to paid and keep them longer
          </h1>

          <div className="text-white py-4 mt-8 text-lg md:text-xl font-mono">
            Fridge Channel keeps you visible every day and turns attention into higher conversion and lower churn
          </div>

          <div className="flex items-center justify-center" style={{ marginTop: '40px' }}>
            <Link
              href="https://calendly.com/billy-fridgechannels/30min"
              target="_blank"
              rel="noreferrer"
            >
              <ShimmerButton
                className="shadow-2xl transition-transform duration-300 hover:scale-110"
                background="linear-gradient(120deg, #9f1026, #f25f6c)"
                shimmerColor="#ffe5e9"
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                  Start a Pilot
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
