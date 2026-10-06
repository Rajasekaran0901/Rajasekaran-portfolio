import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; radius: number };

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let nodes: Node[] = [];
    const pointer = { x: -1000, y: -1000 };
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reset = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.min(74, Math.max(34, Math.floor((width * height) / 22000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius: Math.random() * 1.8 + 1.2,
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      nodes.forEach((node, index) => {
        if (!reducedMotion) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 170 && distance > 0) {
            node.vx += (dx / distance) * 0.004;
            node.vy += (dy / distance) * 0.004;
          }
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < -10 || node.x > width + 10) node.vx *= -1;
          if (node.y < -10 || node.y > height + 10) node.vy *= -1;
          node.vx = Math.max(-0.65, Math.min(0.65, node.vx));
          node.vy = Math.max(-0.65, Math.min(0.65, node.vy));
        }

        for (let peerIndex = index + 1; peerIndex < nodes.length; peerIndex += 1) {
          const peer = nodes[peerIndex];
          if (!peer) continue;
          const distance = Math.hypot(node.x - peer.x, node.y - peer.y);
          if (distance < 150) {
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(peer.x, peer.y);
            context.strokeStyle = `oklch(0.73 0.155 225 / ${0.2 * (1 - distance / 150)})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fillStyle = "oklch(0.76 0.16 225 / 0.72)";
        context.shadowColor = "oklch(0.73 0.18 225 / 0.8)";
        context.shadowBlur = 10;
        context.fill();
        context.shadowBlur = 0;
      });
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };

    const movePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const clearPointer = () => { pointer.x = -1000; pointer.y = -1000; };

    reset();
    draw();
    window.addEventListener("resize", reset);
    window.addEventListener("pointermove", movePointer);
    document.documentElement.addEventListener("mouseleave", clearPointer);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", reset);
      window.removeEventListener("pointermove", movePointer);
      document.documentElement.removeEventListener("mouseleave", clearPointer);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-80" />;
}