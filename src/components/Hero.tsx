import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Bodies, Body, Engine, World } from 'matter-js';

type CardDefinition = {
  key: string;
  className: string;
  rotate: number;
  delay: number;
  content: ReactNode;
};

const CARD_DEFINITIONS: CardDefinition[] = [
  {
    key: 'code',
    className: 'h-28 w-44 sm:h-32 sm:w-52',
    rotate: -8,
    delay: 550,
    content: (
      <>
        <span className="font-display text-2xl font-semibold tracking-tightest text-ink sm:text-3xl">
          Code
        </span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-mute">Engineered</span>
      </>
    ),
  },
  {
    key: 'design',
    className: 'h-28 w-44 sm:h-32 sm:w-52',
    rotate: 7,
    delay: 650,
    content: (
      <>
        <span className="font-display text-2xl font-semibold tracking-tightest text-accent sm:text-3xl">
          Design
        </span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-mute">Crafted</span>
      </>
    ),
  },
  {
    key: 'automate',
    className: 'h-24 w-40',
    rotate: 5,
    delay: 750,
    content: (
      <>
        <span className="font-display text-xl font-semibold tracking-tightest text-ink">Automate</span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-mute">AI & workflows</span>
      </>
    ),
  },
  {
    key: 'ship',
    className: 'h-24 w-40',
    rotate: -6,
    delay: 850,
    content: (
      <>
        <span className="font-display text-xl font-semibold tracking-tightest text-ink">Ship</span>
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-mute">Ideas to reality</span>
      </>
    ),
  },
];

function PhysicsCard({
  definition,
  cardRef,
  dragging,
  onPointerDown,
}: {
  definition: CardDefinition;
  cardRef: (element: HTMLDivElement | null) => void;
  dragging: boolean;
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      ref={cardRef}
      data-physics-card={definition.key}
      onPointerDown={onPointerDown}
      className={`absolute left-0 top-0 flex touch-none select-none items-center justify-center rounded-3xl border border-paper-line bg-paper shadow-[0_20px_50px_-24px_rgba(16,16,18,0.25)] transition-[box-shadow,scale] duration-200 ${
        dragging ? 'z-20 scale-[1.04] cursor-grabbing shadow-[0_28px_60px_-20px_rgba(16,16,18,0.3)]' : 'cursor-grab'
      } ${definition.className}`}
      style={{ opacity: 0, transform: `rotate(${definition.rotate}deg)` }}
    >
      <div className="flex flex-col items-center gap-2">{definition.content}</div>
    </div>
  );
}

function PhysicsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const engineRef = useRef<Engine | null>(null);
  const bodiesRef = useRef<Record<string, Body>>({});
  const animationRef = useRef<number | null>(null);
  const dragRef = useRef<{
    key: string;
    body: Body;
    pointerId: number;
    lastX: number;
    lastY: number;
    lastTime: number;
    velocityX: number;
    velocityY: number;
  } | null>(null);
  const [draggingKey, setDraggingKey] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = 0;
    let height = 0;
    let walls: Body[] = [];
    let centralBody: Body | null = null;
    let lastFrame = performance.now();

    const positionCard = (body: Body, element: HTMLDivElement) => {
      element.style.transform = `translate(${body.position.x - element.offsetWidth / 2}px, ${body.position.y - element.offsetHeight / 2}px) rotate(${body.angle}rad)`;
    };

    const createScene = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      if (!width || !height) return;

      const engine = Engine.create({ enableSleeping: true });
      engine.gravity.x = 0;
      engine.gravity.y = 0.035;
      engine.positionIterations = 8;
      engine.velocityIterations = 6;
      engineRef.current = engine;

      const wallThickness = 80;
      walls = [
        Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true }),
        Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true }),
        Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
        Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true }),
      ];

      const centerSize = Math.min(width < 640 ? 176 : 224, width * 0.62);
      centralBody = Bodies.circle(width / 2, height / 2, centerSize / 2, {
        isStatic: true,
        restitution: 0.78,
        label: 'fixed-kemcode-logo',
      });

      const startPositions = [
        [width * 0.19, height * 0.25],
        [width * 0.81, height * 0.22],
        [width * 0.28, height * 0.76],
        [width * 0.72, height * 0.78],
      ];

      const cardBodies = CARD_DEFINITIONS.map((definition, index) => {
        const element = cardRefs.current[definition.key];
        const cardWidth = element?.offsetWidth ?? (index < 2 ? 208 : 160);
        const cardHeight = element?.offsetHeight ?? (index < 2 ? 128 : 96);
        const [x, y] = startPositions[index];
        const body = Bodies.rectangle(x, y, cardWidth, cardHeight, {
          restitution: 0.68,
          friction: 0.08,
          frictionAir: 0.035,
          density: 0.0012,
          chamfer: { radius: 22 },
          angle: (definition.rotate * Math.PI) / 180,
          label: `physics-card-${definition.key}`,
        });
        bodiesRef.current[definition.key] = body;
        if (element) {
          element.style.opacity = '1';
          positionCard(body, element);
        }
        return body;
      });

      World.add(engine.world, [...walls, centralBody, ...cardBodies]);
    };

    const destroyScene = () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (engineRef.current) {
        World.clear(engineRef.current.world, false);
        Engine.clear(engineRef.current);
      }
      engineRef.current = null;
      bodiesRef.current = {};
      walls = [];
      centralBody = null;
    };

    const tick = (now: number) => {
      const engine = engineRef.current;
      if (!engine) return;
      const delta = Math.min(now - lastFrame, 32);
      lastFrame = now;
      Engine.update(engine, delta);

      CARD_DEFINITIONS.forEach((definition, index) => {
        const body = bodiesRef.current[definition.key];
        const element = cardRefs.current[definition.key];
        if (!body || !element) return;
        const isDragging = dragRef.current?.key === definition.key;
        if (!isDragging && body.speed < 0.7) {
          Body.applyForce(body, body.position, {
            x: Math.sin(now / 950 + index) * 0.000012,
            y: Math.cos(now / 1150 + index) * 0.000012 - 0.000008,
          });
        }
        positionCard(body, element);
      });

      animationRef.current = requestAnimationFrame(tick);
    };

    const resetScene = () => {
      destroyScene();
      createScene();
      lastFrame = performance.now();
      animationRef.current = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(resetScene);
    resizeObserver.observe(container);
    resetScene();

    return () => {
      resizeObserver.disconnect();
      destroyScene();
    };
  }, []);

  const handlePointerDown = (key: string, event: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const body = bodiesRef.current[key];
    if (!container || !body) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    const bounds = container.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    dragRef.current = {
      key,
      body,
      pointerId: event.pointerId,
      lastX: x,
      lastY: y,
      lastTime: performance.now(),
      velocityX: 0,
      velocityY: 0,
    };
    Body.setStatic(body, true);
    Body.setVelocity(body, { x: 0, y: 0 });
    Body.setAngularVelocity(body, 0);
    setDraggingKey(key);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    const container = containerRef.current;
    if (!drag || !container || event.pointerId !== drag.pointerId) return;

    const element = cardRefs.current[drag.key];
    if (!element) return;
    const bounds = container.getBoundingClientRect();
    const now = performance.now();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const dt = Math.max(now - drag.lastTime, 8);
    drag.velocityX = (x - drag.lastX) / dt * 16.67;
    drag.velocityY = (y - drag.lastY) / dt * 16.67;
    drag.lastX = x;
    drag.lastY = y;
    drag.lastTime = now;

    const halfWidth = element.offsetWidth / 2;
    const halfHeight = element.offsetHeight / 2;
    Body.setPosition(drag.body, {
      x: Math.max(halfWidth, Math.min(bounds.width - halfWidth, x)),
      y: Math.max(halfHeight, Math.min(bounds.height - halfHeight, y)),
    });
    Body.setAngle(drag.body, drag.body.angle);
    Body.setVelocity(drag.body, { x: 0, y: 0 });
  };

  const releasePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;

    Body.setStatic(drag.body, false);
    Body.setVelocity(drag.body, {
      x: Math.max(-14, Math.min(14, drag.velocityX * 0.9)),
      y: Math.max(-14, Math.min(14, drag.velocityY * 0.9)),
    });
    Body.setAngularVelocity(drag.body, Math.max(-0.08, Math.min(0.08, drag.velocityX * 0.004)));
    dragRef.current = null;
    setDraggingKey(null);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerUp={releasePointer}
      onPointerCancel={releasePointer}
      className="relative mx-auto mt-16 h-[340px] max-w-4xl touch-none [perspective:1200px] sm:mt-20 sm:h-[420px] lg:h-[480px]"
    >
      {CARD_DEFINITIONS.map((definition) => (
        <PhysicsCard
          key={definition.key}
          definition={definition}
          dragging={draggingKey === definition.key}
          cardRef={(element) => {
            cardRefs.current[definition.key] = element;
          }}
          onPointerDown={(event) => handlePointerDown(definition.key, event)}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 sm:h-56 sm:w-56"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="animate-floaty flex h-full w-full items-center justify-center rounded-full border border-paper-line bg-paper shadow-[0_40px_80px_-32px_rgba(16,16,18,0.3)]">
          <span className="text-center font-display text-3xl font-semibold tracking-tightest text-ink sm:text-4xl">
            KEM
            <span className="text-accent">CODE</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const gridY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} id="top" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <motion.div
        style={{ y: gridY }}
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(16,16,18,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,16,18,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-320px] h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-accent-tint/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-paper-line bg-paper/80 px-4 py-1.5 text-[13px] font-medium text-ink-soft backdrop-blur">
            <Code2 className="h-3.5 w-3.5 text-accent" />
            KEMCODE — Technology & Digital Solutions Studio
          </div>
        </motion.div>

        <motion.h1
          style={{ y: textY }}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance mx-auto mt-8 max-w-5xl text-center font-display text-[13vw] font-semibold leading-[0.98] tracking-tightest text-ink sm:text-7xl lg:text-[6.5rem]"
        >
          WE TURN IDEAS INTO{' '}
          <span className="relative inline-block">
            <span className="italic text-accent">DIGITAL</span>
          </span>{' '}
          REALITY.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-ink-mute sm:text-lg"
        >
          From premium websites and custom software to intelligent automation and digital
          platforms, we help businesses transform ideas into meaningful technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:bg-ink-soft sm:w-auto"
          >
            Let&rsquo;s Build Something
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-paper-line bg-paper px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-300 hover:border-ink sm:w-auto"
          >
            Explore Our Work
            <ArrowDown className="h-4 w-4" />
          </Link>
        </motion.div>

        <PhysicsScene />
      </div>
    </section>
  );
}
