import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type GalleryItem = {
  src: string;
  tag: string;
  label: string;
};

type GalleryProps = {
  title: string;
  subheading: string;
  items?: GalleryItem[];
};

const useScrollParallax = (amount = 24) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const sc = window.scrollY || 0;
        setY(Math.max(-amount, Math.min(amount, sc * 0.04)));
      });
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [amount]);

  return y;
};

const useInViewOnce = <T extends HTMLElement>(threshold = 0.2) => {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el || seen) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold, seen]);

  return { ref, seen };
};

function GalleryCard({
  item,
  onOpen,
  index,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
  index: number;
}) {
  const reduced = useReducedMotion();
  const { ref, seen } = useInViewOnce<HTMLElement>();

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: seen ? 1 : 0,
        y: seen ? 0 : 30,
      }}
      transition={{
        duration: 0.6,
        delay: reduced ? 0 : index * 0.03,
      }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120]/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45)] group break-inside-avoid mb-5"
    >
      <button
        type="button"
        className="absolute inset-0 z-10"
        aria-label={`Open ${item.label}`}
        onClick={() => onOpen(item)}
      />

      <motion.img
        src={item.src}
        alt={item.label}
        loading="lazy"
        decoding="async"
        className="w-full h-auto object-contain object-center transition-all duration-500"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80" />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(91,217,255,0.15),transparent_55%)]" />

      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur border border-white/10 text-white">
          {item.tag}
        </span>
      </div>

      <figcaption className="absolute bottom-5 left-5 right-5 z-20">
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/90 font-semibold">
              {item.label}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-white/80">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
            <span className="text-[11px] font-semibold tracking-wide">
              Preview
            </span>
          </div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

function Lightbox({
  open,
  item,
  onClose,
}: {
  open: boolean;
  item: GalleryItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center p-4 md:p-10"
          >
            <div className="relative w-full max-w-6xl h-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#050816]/90 shadow-[0_20px_120px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,217,255,0.15),transparent_50%)]" />

              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white text-2xl"
              >
                ×
              </button>

              <div className="relative flex items-center justify-center w-full h-full p-6">
                <img
                  src={item.src}
                  alt={item.label}
                  className="max-w-full max-h-full object-contain object-center"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectGallery({
  title,
  subheading,
  items,
}: GalleryProps) {
  const parY = useScrollParallax(26);

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<GalleryItem | null>(null);

  const finalItems = useMemo(() => {
    const modules = import.meta.glob("../../images/*.{png,jpg,jpeg,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>;

    const entries = Object.entries(modules);

    return entries.map(([_, src], index) => {
      const base = {
        src,
        tag: "Industrial Foil",
        label: `Project ${index + 1}`,
      };

      const override = items?.find((it) => it.src === src);

      return override ? { ...base, ...override } : base;
    });
  }, [items]);

  const bgStyle = useMemo(() => {
    return {
      transform: `translateY(${parY}px)`,
    };
  }, [parY]);

  const openItem = (item: GalleryItem) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div
        className="absolute -top-32 left-1/2 w-[70rem] h-[70rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]"
        style={bgStyle}
      />

      <div className="container relative mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-cyan-300 font-semibold">
            Cinematic Showcase
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-white">
            {title}
          </h2>

          <p className="mt-5 max-w-3xl text-slate-400 leading-relaxed text-lg">
            {subheading}
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {finalItems.map((item, index) => (
            <GalleryCard
              key={item.src + item.label}
              item={item}
              onOpen={openItem}
              index={index}
            />
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        item={active}
        onClose={() => {
          setOpen(false);
          setActive(null);
        }}
      />
    </section>
  );
}