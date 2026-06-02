import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Globally observes all <section> elements (and any [data-reveal] nodes)
 * and adds `is-visible` when they enter the viewport. Re-scans on route
 * changes so newly mounted pages animate too.
 */
const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
      const tagged = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      return Array.from(new Set([...sections, ...tagged]));
    };

    const prep = (el: HTMLElement) => {
      if (el.dataset.revealReady) return;
      el.dataset.revealReady = "1";
      el.classList.add("reveal");
    };

    if (prefersReduced) {
      targets().forEach((el) => {
        prep(el);
        el.classList.add("is-visible");
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    const scan = () => {
      targets().forEach((el) => {
        prep(el);
        const rect = el.getBoundingClientRect();
        // Elements already in view on mount → reveal immediately (no flash).
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add("is-visible");
        } else {
          io.observe(el);
        }
      });
    };

    // Defer to ensure DOM is painted for the new route.
    const t = window.setTimeout(scan, 30);

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(t);
      mo.disconnect();
      io.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default ScrollReveal;
