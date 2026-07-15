"use client";

import { useEffect, useRef } from "react";
import { useScrollFrame } from "@/hooks/useScrollFrame";
import { whatsappUrl } from "@/lib/constants";

const TOTAL_FRAMES = 100;
const FRAMES_PATH = "/frames/loop";
const HERO_HEIGHT = `${TOTAL_FRAMES * 5}vh`;

interface TextScene {
  eyebrow: string;
  headline: string;
  body: string;
  link?: { label: string; href: string };
  start: number;
  end: number;
}

const scenes: TextScene[] = [
  {
    eyebrow: "Powertech Imports",
    headline: "Os melhores preços em\ncelulares e acessórios.",
    body: "Curadoria selecionada com garantia e nota fiscal em Blumenau.",
    start: 0,
    end: 28,
  },
  {
    eyebrow: "Atendimento consultivo",
    headline: "Compre com\norientação.",
    body: "Tire dúvidas e receba indicações antes de fechar a compra.",
    start: 32,
    end: 60,
  },
  {
    eyebrow: "WhatsApp",
    headline: "Fale com a\n gente agora.",
    body: "Sem burocracia, direto no atendimento personalizado.",
    link: {
      label: "Chamar no WhatsApp",
      href: whatsappUrl("Olá! Gostaria de conhecer os produtos da Powertech imports."),
    },
    start: 64,
    end: 92,
  },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

function getTextValues(progress: number, start: number, end: number, fade = 4) {
  const pct = progress * 100;
  let opacity = 0;
  let translateY = 32;

  if (pct >= start - fade && pct <= end + fade) {
    if (pct < start) {
      const t = (pct - (start - fade)) / fade;
      opacity = t;
      translateY = lerp(32, 0, t);
    } else if (pct > end) {
      const t = (pct - end) / fade;
      opacity = 1 - t;
      translateY = lerp(0, -24, t);
    } else {
      opacity = 1;
      translateY = 0;
    }
  }
  return { opacity, translateY };
}

export function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const isReadyRef = useRef(false);

  const { currentFrame, progress } = useScrollFrame(containerRef, TOTAL_FRAMES);

  const getFrameUrl = (i: number) =>
    `${FRAMES_PATH}/frame_${String(i + 1).padStart(4, "0")}.webp`;

  const syncCanvasSize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  };

  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[idx];
    if (!canvas || !img?.complete || img.naturalWidth === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const ratio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = W / H;

    let dW = 0, dH = 0, oX = 0, oY = 0;
    if (ratio > canvasRatio) {
      dH = H; dW = H * ratio; oX = (W - dW) / 2;
    } else {
      dW = W; dH = W / ratio; oY = (H - dH) / 2;
    }
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, oX, oY, dW, dH);
  };

  useEffect(() => {
    const images: HTMLImageElement[] = Array.from({ length: TOTAL_FRAMES }, () => new Image());
    imagesRef.current = images;
    const BATCH1 = Math.min(40, TOTAL_FRAMES);
    let loaded = 0;

    for (let i = 0; i < BATCH1; i++) {
      images[i].onload = () => {
        loaded++;
        if (loaded === 1) { syncCanvasSize(); drawFrame(0); }
        if (loaded === BATCH1) { isReadyRef.current = true; drawFrame(currentFrame); }
      };
      images[i].src = getFrameUrl(i);
    }

    const loadRest = () => { for (let i = BATCH1; i < TOTAL_FRAMES; i++) images[i].src = getFrameUrl(i); };
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    "requestIdleCallback" in window ? requestIdleCallback(loadRest) : setTimeout(loadRest, 200);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isReadyRef.current) return;
    requestAnimationFrame(() => drawFrame(currentFrame));
  }, [currentFrame]);

  useEffect(() => {
    const onResize = () => { syncCanvasSize(); drawFrame(currentFrame); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [currentFrame]);

  return (
    <section ref={containerRef} id="hero" style={{ height: HERO_HEIGHT, position: "relative", width: "100%" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", width: "100%", overflow: "hidden", background: "#ffffff" }}>

        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
        />

        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(to right, #ffffff 38%, rgba(255,255,255,0.6) 52%, transparent 68%, rgba(255,255,255,0.1) 100%)",
        }} />

        {scenes.map((scene) => {
          const { opacity, translateY } = getTextValues(progress, scene.start, scene.end);
          return (
            <div
              key={scene.eyebrow}
              style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column", justifyContent: "center",
                paddingLeft: "clamp(40px, 7vw, 120px)",
                opacity,
                transform: `translateY(${translateY}px)`,
                willChange: "opacity, transform",
                pointerEvents: "none",
              }}
            >
              <p style={{
                fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase" as const, color: "#86868B", marginBottom: "20px",
              }}>
                {scene.eyebrow}
              </p>
              <h1 style={{
                fontSize: "clamp(36px, 4.6vw, 68px)", fontWeight: 700,
                letterSpacing: "-0.035em", lineHeight: 1.04,
                color: "#1D1D1F", whiteSpace: "pre-line" as const,
                marginBottom: "24px",
              }}>
                {scene.headline}
              </h1>
              <p style={{
                fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 400,
                letterSpacing: "-0.003em", lineHeight: 1.5,
                color: "#515154", maxWidth: "400px",
              }}>
                {scene.body}
              </p>
              {scene.link && (
                <div style={{ marginTop: "32px", pointerEvents: "auto" }}>
                  <a
                    href={scene.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "14px 28px", borderRadius: "999px",
                      background: "#25D366", color: "#ffffff",
                      fontSize: "14px", fontWeight: 600,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                  >
                    {scene.link.label}
                  </a>
                </div>
              )}
            </div>
          );
        })}

        <div style={{
          position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: Math.max(0, 1 - progress * 20),
          transition: "opacity 0.3s ease",
        }} className="scroll-bounce">
          <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#86868B" }}>
            Role para descobrir
          </p>
          <svg width="12" height="16" viewBox="0 0 12 16" fill="none" style={{ color: "#86868B" }}>
            <path d="M6 1v14M1 10l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
