import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function BlobCursor({
  blobType = "circle",
  fillColor = "#22c55e",
  trailCount = 3,
  sizes = [60, 125, 75],
  innerSizes = [20, 35, 25],
  innerColor = "rgba(255,255,255,0.8)",
  opacities = [0.6, 0.6, 0.6],
  shadowColor = "rgba(0,0,0,0.75)",
  shadowBlur = 5,
  shadowOffsetX = 10,
  shadowOffsetY = 10,
  filterId = "blob",
  filterStdDeviation = 30,
  filterColorMatrixValues = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -10",
  useFilter = true,
  fastDuration = 0.1,
  slowDuration = 0.5,
  fastEase = "power3.out",
  slowEase = "power1.out",
  zIndex = 999999,
  debug = false // set true to console.log pointer coords for debugging
}) {
  const containerRef = useRef(null);
  const blobsRef = useRef([]);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const updateOffset = useCallback(() => ({ left: 0, top: 0 }), []);

  const getSafe = (arr, i, defaultVal) => (arr && arr.length ? arr[i % arr.length] ?? defaultVal : defaultVal);

  const handleMove = useCallback(
    (e) => {
      const { left, top } = updateOffset();
      const x = "clientX" in e ? e.clientX : e.touches?.[0]?.clientX;
      const y = "clientY" in e ? e.clientY : e.touches?.[0]?.clientY;
      if (typeof x !== "number" || typeof y !== "number") return;

      if (debug) console.log("blob cursor:", x, y);

      blobsRef.current.forEach((el, i) => {
        if (!el) return;
        const isLead = i === 0;

        if (prefersReducedMotion) {
          // Jump directly for reduced motion
          gsap.set(el, { x: x - left, y: y - top });
          return;
        }

        gsap.to(el, {
          x: x - left,
          y: y - top,
          duration: isLead ? fastDuration : slowDuration,
          ease: isLead ? fastEase : slowEase
        });
      });
    },
    [updateOffset, fastDuration, slowDuration, fastEase, slowEase, prefersReducedMotion, debug]
  );

  useEffect(() => {
    // Global listeners so overlay follows pointer regardless of hovered element
    const onMouse = (e) => handleMove(e);
    const onTouch = (e) => handleMove(e);

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [handleMove]);

  useEffect(() => {
    // Initialize blobs: use gsap.set to place them offscreen via transform,
    // not by changing left/top in CSS. This lets future `x` transforms work as expected.
    blobsRef.current.forEach((el) => {
      if (!el) return;
      gsap.set(el, { x: -9999, y: -9999 });
    });

    // Optionally place the lead blob at center when reduced motion is preferred
    if (prefersReducedMotion && blobsRef.current[0]) {
      gsap.set(blobsRef.current[0], { x: window.innerWidth / 2, y: window.innerHeight / 2 });
    }
  }, [prefersReducedMotion]);

  // Resize listener left in place for completeness (no offset calc needed for fixed overlay)
  useEffect(() => {
    const onResize = () => updateOffset();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateOffset]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 overflow-visible select-none"
      style={{ zIndex }}
      aria-hidden="true"
    >
      {useFilter && (
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation={filterStdDeviation} />
            <feColorMatrix in="blur" values={filterColorMatrixValues} />
          </filter>
        </svg>
      )}

      <div className="absolute inset-0 will-change-transform" style={{ filter: useFilter ? `url(#${filterId})` : undefined }}>
        {Array.from({ length: trailCount }).map((_, i) => {
          const size = getSafe(sizes, i, 60);
          const inner = getSafe(innerSizes, i, Math.round(size / 3));
          const opacity = getSafe(opacities, i, 0.6);

          return (
            <div
              key={i}
              ref={(el) => (blobsRef.current[i] = el)}
              className="absolute will-change-transform transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: blobType === "circle" ? "50%" : "0",
                backgroundColor: fillColor,
                opacity,
                boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 0 ${shadowColor}`,
                // Keep left/top at 0 so transforms work predictably
                left: 0,
                top: 0
              }}
            >
              <div
                className="absolute"
                style={{
                  width: `${inner}px`,
                  height: `${inner}px`,
                  top: `${(size - inner) / 2}px`,
                  left: `${(size - inner) / 2}px`,
                  backgroundColor: innerColor,
                  borderRadius: blobType === "circle" ? "50%" : "0"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
