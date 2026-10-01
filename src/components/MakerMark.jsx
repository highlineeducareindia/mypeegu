import { useCallback, useEffect, useRef, useState } from "react";

const SECRET = "piva7";
const WINDOW_MS = 1800;

const WORK = [
  { label: "PIVA", detail: "Student intelligence assistant, part of the brand" },
  { label: "Counselling", detail: "Cases, drafts, and live virtual rooms" },
  { label: "IEP", detail: "Hand-built plans and AI-generated IEPs" },
  { label: "Platform", detail: "Users, roles, automation, and activity audit" },
  { label: "Wellbeing", detail: "SBA, Safe Space, and student assessments" },
];

function isTypingTarget(target) {
  if (!target) return false;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

const MakerMark = () => {
  const [open, setOpen] = useState(false);
  const buffer = useRef("");
  const timer = useRef(null);
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, px: 62, py: 18 });
  const reveal = useCallback(() => setOpen(true), []);

  useEffect(() => {
    let clicks = 0;
    let clickTimer = null;
    const onClick = (event) => {
      const mark = event.target?.closest?.("[data-maker-mark]");
      if (!mark) return;
      clicks += 1;
      window.clearTimeout(clickTimer);
      clickTimer = window.setTimeout(() => {
        clicks = 0;
      }, 1500);
      if (clicks >= 5) {
        clicks = 0;
        reveal();
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(clickTimer);
    };
  }, [reveal]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (isTypingTarget(event.target)) return;
      if (event.key.length !== 1) return;
      buffer.current = (buffer.current + event.key.toLowerCase()).slice(-SECRET.length);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        buffer.current = "";
      }, WINDOW_MS);
      if (buffer.current === SECRET) {
        buffer.current = "";
        reveal();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(timer.current);
    };
  }, [reveal]);

  const onMove = (event) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    setTilt({
      x: (py / 100 - 0.5) * -9,
      y: (px / 100 - 0.5) * 11,
      px,
      py,
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center p-4" style={{ perspective: "1100px" }}>
      <style>{`
        @keyframes makerRise {
          from { opacity: 0; transform: translateY(26px) scale(0.94); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes makerSheen {
          0%, 58% { transform: translateX(-130%); }
          100% { transform: translateX(130%); }
        }
        @keyframes makerIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes makerGlow {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .maker-rise, .maker-sheen, .maker-in, .maker-glow { animation: none !important; }
        }
      `}</style>
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-[#08091d]/72 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative maker-rise" style={{ animation: "makerRise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
        <div
          className="maker-glow absolute left-[12%] right-[12%] -bottom-4 h-9 rounded-full bg-[#6B32B5]/55 blur-lg"
          style={{ animation: "makerGlow 3.2s ease-in-out infinite" }}
        />
        <div
          ref={cardRef}
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0, px: 62, py: 18 })}
          className="relative w-[min(92vw,420px)] rounded-[22px] p-px shadow-[0_28px_70px_rgba(8,9,29,0.45)]"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.55), rgba(151,71,255,0.2) 38%, rgba(2,103,217,0.35))",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[21px] px-6 pt-7 pb-6 text-[#F7F4FF]"
            style={{
              background: `radial-gradient(420px circle at ${tilt.px}% ${tilt.py}%, rgba(151, 71, 255, 0.38), transparent 42%), linear-gradient(165deg, #1a1233 0%, #140e28 46%, #0d1830 100%)`,
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.18s ease-out",
            }}
          >
            <div
              className="maker-sheen pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, transparent 32%, rgba(255,255,255,0.16) 48%, transparent 64%)",
                animation: "makerSheen 4.2s ease-in-out 0.9s infinite",
              }}
            />
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 text-white/70 hover:text-white text-xl leading-none px-2"
            >
              ×
            </button>
            <div className="relative z-10">
              <p className="text-[11px] font-bold tracking-[0.22em] text-[#D7C4FF]">MYPEEGU</p>
              <div
                className="maker-in mt-5 grid h-14 w-14 place-items-center rounded-2xl text-lg font-bold text-white shadow-[0_10px_24px_rgba(107,50,181,0.45)]"
                style={{
                  background: "linear-gradient(145deg, #9747FF 0%, #6B32B5 55%, #0267D9 140%)",
                  animation: "makerIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both",
                }}
              >
                RP
              </div>
              <h2
                className="maker-in mt-4 text-[32px] font-bold leading-none tracking-tight"
                style={{ animation: "makerIn 0.65s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both" }}
              >
                Rohit Patel
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-[#F3EAFF]">
                  Developer
                </span>
                <span className="rounded-full bg-gradient-to-b from-[#FFE08A] to-[#F8A70D] px-3 py-1 text-xs font-semibold text-[#1B1404]">
                  Super Admin
                </span>
              </div>
              <p
                className="maker-in mt-4 max-w-[340px] text-sm leading-relaxed text-white/80"
                style={{ animation: "makerIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.28s both" }}
              >
                Built MyPeegu, then took it to the next level — the product, the AI, and the controls a school runs on.
              </p>
              <div className="mt-4 grid gap-0">
                {WORK.map((item, index) => (
                  <div
                    key={item.label}
                    className="maker-in grid grid-cols-[92px_1fr] items-baseline gap-3 border-t border-white/10 py-2"
                    style={{
                      animation: "makerIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) both",
                      animationDelay: `${0.36 + index * 0.07}s`,
                    }}
                  >
                    <p className="text-[12.5px] font-bold text-[#E4D4FF]">{item.label}</p>
                    <p className="text-[12.5px] leading-snug text-white/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakerMark;
