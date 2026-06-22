import { useEffect, useState } from "react";
import crossPng from "@/assets/cross.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      setTimeout(onComplete, 1000); // Esperamos que termine la animación
    }, 4200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-black transition-opacity duration-1000"
      style={{
        opacity: showSplash ? 1 : 0,
        pointerEvents: showSplash ? "auto" : "none",
      }}
    >
      <div className="absolute top-8 left-8 text-white/20 font-mono text-xs tracking-widest uppercase">SS / 2025</div>
      <div className="absolute top-8 right-8 text-white/20 font-mono text-xs tracking-widest uppercase">Col. I</div>
      <div className="absolute bottom-8 left-8 text-white/20 font-mono text-xs tracking-widest uppercase">Buenos Aires</div>
      <div className="absolute bottom-8 right-8 text-white/20 font-mono text-xs tracking-widest uppercase">© LIØN</div>

      <div className="relative z-10 select-none flex flex-col items-center animate-fade-up">
        <h1 className="flex items-center leading-none m-0" style={{ gap: "0.3em" }}>
          <span className="text-white font-heading" style={{ fontSize: "clamp(64px, 12vw, 160px)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
            LIØN
          </span>
          <span className="text-white font-heading" style={{ fontSize: "clamp(48px, 9vw, 120px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 0.9 }}>
            &amp;
          </span>
          <span style={{ position: "relative", width: "clamp(36px, 5.5vw, 72px)", height: "clamp(36px, 5.5vw, 72px)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "0.05em" }}>
            <img
              src={crossPng}
              alt="†"
              style={{
                width: "100%", height: "100%", objectFit: "contain",
                mixBlendMode: "screen",
                filter: "brightness(1.1) contrast(1.05)",
                maskImage: "radial-gradient(80% 85%, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(80% 85%, black 40%, transparent 100%)",
              }}
            />
          </span>
        </h1>

        <div className="animate-line-grow" style={{ height: "0.5px", background: "rgba(255,255,255,0.15)", marginTop: "18px", width: "100%" }} />

        <p className="text-white/30 font-mono text-center tracking-widest uppercase mt-5" style={{ fontSize: "10px", letterSpacing: "0.25em" }}>
          Moda sin filtros · Streetwear editorial
        </p>
      </div>

      <div
        className="absolute pointer-events-none animate-glow-pulse"
        style={{
          width: "50vw", height: "50vw", maxWidth: 500, maxHeight: 500,
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          borderRadius: "50%", top: "50%", left: "50%",
        }}
      />
    </div>
  );
}
